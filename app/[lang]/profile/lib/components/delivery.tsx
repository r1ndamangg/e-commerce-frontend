import { FC } from "react"
import Link from "next/link"
import Image from "next/image"

interface Props {
  address?: string
}

const Delivery: FC<Props> = ({ address }) => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-base font-bold">Доставка</p>
            <Image src="/images/hint.png" alt="" width={12} height={12} />
          </div>

          <p className="text-xs text-[#6A6A81]">Ваши адреса</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-base font-bold">{address}</p>
          </div>

          <Link
            href="/profile/edit/address"
            className="self-end text-xs font-bold text-[#3345EA]"
          >
            Изменить
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Delivery
