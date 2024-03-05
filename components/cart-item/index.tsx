import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import IconButton from "./icon-button"
import { FC } from "react"

interface Props {
  name: string
  cost: number
  quantity: number
  bonus?: number
}

const CartItem: FC<Props> = ({ cost, name, quantity, bonus }) => {
  return (
    <div className="flex gap-2 bg-white">
      <div className="relative">
        <Image
          src="/images/1.png"
          width={140}
          height={140}
          alt="Товар"
          className="rounded-lg bg-grey-0"
        />
        {bonus && (
          <span className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs text-grey-0">{`${bonus}%`}</span>
        )}
      </div>
      <div className="flex flex-col justify-between py-2">
        <div>
          <h3 className="text-base font-bold leading-5 text-blue-900">
            {quantity * cost}
          </h3>
          <p className="text-sm font-bold first-line:text-grey-700">{cost}</p>
        </div>
        <p className="text-sm font-semibold leading-4 text-blue-900">{name}</p>
        <div className="flex items-center gap-4 text-blue-600">
          <IconButton>
            <TrashIcon width={14} />
          </IconButton>
          <IconButton>
            <MinusIcon width={14} />
          </IconButton>
          <span className="block w-full text-center">{quantity}</span>
          <IconButton>
            <PlusIcon width={14} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CartItem
