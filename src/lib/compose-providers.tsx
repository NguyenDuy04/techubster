import * as React from "react"

interface ProviderWithProps<T extends React.ElementType = React.ElementType> {
    component: T
    props?: Omit<React.ComponentProps<T>, "children">
}

interface ComposeProvidersProps {
    providers: Array<React.ElementType | ProviderWithProps>
    children: React.ReactNode
}

export const ComposeProviders = ({ providers, children }: ComposeProvidersProps) => {
    return (
        <>
            {providers.reduceRight((acc, curr) => {
                if (typeof curr === "object" && curr !== null && "component" in curr) {
                    const { component: Provider, props } = curr
                    const Component = Provider as React.ComponentType<React.PropsWithChildren<unknown>>
                    return <Component {...props}>{acc}</Component>
                }

                const Provider = curr as React.ComponentType<React.PropsWithChildren<unknown>>
                return <Provider>{acc}</Provider>
            }, children)}
        </>
    )
}