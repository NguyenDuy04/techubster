'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

type SwitchOption = {
    value: string;
    label: string;
    icon?: ReactNode;
};

type OptionSwitchProps = {
    ariaLabel: string;
    initialValue: string;
    options: SwitchOption[];
    value?: string;
    onValueChange?: (value: string) => void;
};

export const OptionSwitch = ({
    ariaLabel,
    initialValue,
    options,
    value,
    onValueChange,
}: OptionSwitchProps) => {
    const [internalSelectedValue, setInternalSelectedValue] = useState(initialValue);
    const selectedValue = value ?? internalSelectedValue;
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const selectedOption = options.find((option) => option.value === selectedValue);

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                triggerRef.current?.focus();
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className='relative flex h-full items-center w-fit'>
            <button
                ref={triggerRef}
                type='button'
                aria-label={ariaLabel}
                aria-haspopup='menu'
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
                className='inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-slate-600 outline-none transition-colors hover:bg-green-900/5 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-1 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-900'>
                {selectedOption?.icon}
                {selectedOption?.label ?? initialValue}
                <ChevronDown aria-hidden='true' className='h-3.5 w-3.5 text-slate-400' />
            </button>

            {isOpen && (
                <div
                    role='menu'
                    aria-label={ariaLabel}
                    className='absolute right-0 top-full z-50 mt-2 min-w-52 overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30'>
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type='button'
                            role='menuitemradio'
                            aria-checked={option.value === selectedValue}
                            onClick={() => {
                                if (value === undefined) {
                                    setInternalSelectedValue(option.value);
                                }
                                setIsOpen(false);
                                onValueChange?.(option.value);
                            }}
                            className='flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:bg-slate-800'
                        >
                            <span className='inline-flex items-center gap-2'>
                                {option.icon}
                                {option.label}
                            </span>
                            {option.value === selectedValue && (
                                <Check aria-hidden='true' className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
