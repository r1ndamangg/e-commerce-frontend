"use client"

import { CartItem } from "@/components"
import { Button } from "@/components/ui/button"
import { getRUProductCount } from "@/lib/helpers"
import { ICartItem } from "@/types/cart-item"
import { useParams } from "next/navigation"

interface Props {
  items: ICartItem[]
  button: string
}

const CartItems = ({ items, button }: Props) => {
  const { lang } = useParams()

  const totalCost = items.reduce((acc, item) => acc + item.cost, 0)

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-4 bg-white p-4">
        {items.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="z-10 flex flex-col gap-4 bg-white p-4">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {lang === "ru"
              ? getRUProductCount(items.length)
              : `${items.length} тауар`}
          </span>
          <span className="text-lg font-bold">
            {totalCost.toLocaleString("ru")} тг
          </span>
        </div>
        <Button size="m" className="w-full">
          {button}
        </Button>
      </div>
    </div>
  )
}

export default CartItems
