import { Nunito } from "next/font/google"
import "./globals.css"
import Menu from "@/components/menu"

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "kk" }]
}

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
        <div className="flex h-full w-full max-w-md flex-col">
          {children}
          <Menu />
        </div>
      </body>
    </html>
  )
}
