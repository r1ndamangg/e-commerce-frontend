import Header from "./lib/components/header"
import { Metadata } from "next"
import CartContent from "./lib/components/cart-content"
import { getCartPageLocales } from "@/services/cart"

export const metadata: Metadata = {
  title: "Корзина",
  description: "Страница корзины",
}

const Page = async ({ params }: PageWithParams) => {
  const locales = await getCartPageLocales(params.lang)

  return (
    <>
      <Header title={locales.title} />
      <main className="mb-16 h-full py-2">
        <CartContent locales={locales} />
      </main>
    </>
  )
}

export default Page
