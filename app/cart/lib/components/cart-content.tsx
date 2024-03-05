import { FC } from "react"
import CartEmpty from "./cart-empty"
import CartItems from "./cart-items"

interface Props {
  cartItems: any[]
}

const CartContent: FC<Props> = ({ cartItems }) => {
  if (!cartItems.length) {
    return <CartEmpty />
  }

  return <CartItems items={cartItems} />
}

export default CartContent
