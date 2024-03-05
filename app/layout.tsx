import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Menu from "@/components/menu"

const nunito = Nunito({ subsets: ["cyrillic"] })

export default function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode
    params: {
        lang: string
    }
}>) {
    return (
        <html lang={lang}>
            <body className={nunito.className}>
                <div className="h-full flex flex-col">
                    {children}
                    <Menu />
                </div>
            </body>
        </html>
    )
}
