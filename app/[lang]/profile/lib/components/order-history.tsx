import { FC } from "react"
import Link from "next/link"

const OrderHistory: FC = () => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <div className="flex items-center justify-between">
        <p className="text-base font-bold">История заказов</p>
        <Link href="/" className="text-sm font-bold text-[#3345EA]">
          Посмотреть
        </Link>
      </div>
    </div>
  )
}

export default OrderHistory
