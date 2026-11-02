export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="apps">
            <main>{children}</main>
        </div>
    );
}