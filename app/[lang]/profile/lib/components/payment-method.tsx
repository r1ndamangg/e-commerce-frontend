import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface PaymentMethod {
  cardNumber?: string
}

const PaymentMethod: FC<PaymentMethod> = ({ cardNumber }) => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-base font-bold">Способ оплаты</p>
            <Image src="/images/hint.png" alt="" width={12} height={12} />
          </div>

          <p className="text-xs text-[#6A6A81]">Карта, счет или перевод</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-base font-bold">{cardNumber}</p>
          </div>

          <Link href="/" className="self-end text-xs font-bold text-[#3345EA]">
            Изменить
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
