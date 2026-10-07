import { OptionSwitch } from '@/components/common/option-switch';

const currencyOptions = [
    { value: 'usd', label: 'USD $' },
    { value: 'vnd', label: 'VND ₫' },
    { value: 'eur', label: 'EUR €' },
];

export const CurrencySwitch = () => (
    <OptionSwitch
        ariaLabel='Currency'
        initialValue='usd'
        options={currencyOptions}
    />
);
