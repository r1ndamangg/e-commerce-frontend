import ShoppingBagIcon from "@heroicons/react/24/outline/esm/ShoppingBagIcon"

const CartEmpty = () => {
    return (
        <div className=" flex flex-col items-center text-blue-600">
            <div className="bg-blue-0 p-4 rounded-3xl">
                <ShoppingBagIcon width={134} />
            </div>
            <span className="text-xl">Корзина пуста</span>
        </div>
    )
}

export default CartEmpty
