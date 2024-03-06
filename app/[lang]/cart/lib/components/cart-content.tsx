import CartEmpty from "./cart-empty"
import CartItems from "./cart-items"
import { getCartItems } from "@/services/cart"

interface Props {
  locales: Record<string, string>
}

const CartContent = async ({ locales }: Props) => {
  const cartItems = await getCartItems()

  if (!cartItems.length) {
    return <CartEmpty />
  }

  return <CartItems items={cartItems} button={locales.applyButton} />
}

export default CartContent
