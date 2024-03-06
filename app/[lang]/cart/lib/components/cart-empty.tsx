import React from "react"
import { Button } from "@/components/ui/button"
import ShoppingBagIcon from "@heroicons/react/24/outline/esm/ShoppingBagIcon"

const CartEmpty = () => {
  return (
    <div className="flex h-full flex-col justify-between py-[49px]">
      <div className=" flex flex-col items-center gap-8 text-blue-600">
        <div className="rounded-3xl bg-blue-0 p-4">
          <ShoppingBagIcon width={134} />
        </div>
        <span className="text-2xl">Корзина пуста</span>
      </div>
      <Button className="self-center" size="m">
        К покупкам!
      </Button>
    </div>
  )
}

export default CartEmpty
