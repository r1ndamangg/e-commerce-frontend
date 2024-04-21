"use client"
import { normalizePrice } from "@/lib/normalizers"
import Image from "next/image"
import FavoriteButton from "./favorite-button"
import { Badge } from "../ui/badge"
import clsx from "clsx"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

interface Props {
  src: string
  cost: number
  bonuses: number
  favorite?: boolean
  size?: "small" | "medium"
}

const ProductCard: React.FC<Props> = ({
  src,
  bonuses,
  cost,
  favorite,
  size = "medium",
}) => {
  const imageSizes = {
    small: {
      width: 104,
      height: 104,
    },
    medium: {
      width: 164,
      height: 164,
    },
  }

  const isSmall = size === "small"

  const isMedium = size === "medium"

  return (
    <div className="flex flex-col gap-2">
      <div
        className={clsx(
          {
            "h-[104px] w-[104px]": isSmall,
            "h-[164px] w-[164px]": isMedium,
          },
          "relative rounded-lg bg-grey-0"
        )}
      >
        <Image
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          alt="Product card"
          src={src}
        />
        <FavoriteButton />
      </div>
      {isMedium && <p>Name and short description</p>}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-bold leading-4">{cost} тг.</p>
          <Badge className="self-start">{normalizePrice(bonuses)}</Badge>
        </div>
        {isMedium && (
          <button className="shrink-0 rounded-lg bg-blue-0 p-2">
            <ShoppingBagIcon width={16} className="text-blue-600" />
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
