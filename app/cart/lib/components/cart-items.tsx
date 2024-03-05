import CartItem from "@/components/cart-item"
import { Button } from "@/components/ui/button"
import { ICartItem } from "@/types/cart-item"
import { FC } from "react"

interface Props {
  items: ICartItem[]
}

const CartItems: FC<Props> = ({ items }) => {
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
          <span className="text-lg font-bold">{items.length} товара</span>
          <span className="text-lg font-bold">
            {totalCost.toLocaleString("ru")} тг
          </span>
        </div>
        <Button size="m" className="w-full">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default CartItems
