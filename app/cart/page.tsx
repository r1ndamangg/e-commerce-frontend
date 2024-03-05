import Header from "./lib/components/header"
import { Metadata } from "next"
import CartContent from "./lib/components/cart-content"
import { getCartItems } from "@/services/cart"

export const metadata: Metadata = {
  title: "Корзина",
  description: "Страница корзины",
}

const Page = async () => {
  const cartItems = await getCartItems()

  return (
    <>
      <Header />
      <main className="mb-16 h-full py-2">
        <CartContent cartItems={cartItems} />
      </main>
    </>
  )
}

export default Page
