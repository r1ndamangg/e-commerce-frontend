import Header from "./lib/components/header"
import CartEmpty from "./lib/components/cart-empty"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import CartItem from "@/components/cart-item"
import CartContent from "./lib/components/cart-content"

export const metadata: Metadata = {
  title: "Корзина",
  description: "Страница корзины",
}

const Page = () => {
  const cartItems = [
    {
      id: 1,
      name: "Name and description",
      quantity: 10,
      cost: 5000,
      bonus: 10,
    },
    {
      id: 2,
      name: "Name and description",
      quantity: 10,
      cost: 5000,
      bonus: 10,
    },
  ]

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
