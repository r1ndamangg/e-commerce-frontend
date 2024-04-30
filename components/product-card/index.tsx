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
  name: string
  size?: "small" | "medium"
}

const ProductCard: React.FC<Props> = ({
  src,
  bonuses,
  cost,
  favorite,
  name,
  size = "medium",
}) => {
  const isSmall = size === "small"

  const isMedium = size === "medium"

  return (
    <div className="flex flex-col gap-2 bg-white">
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
          alt={name}
          style={{ objectFit: "contain", padding: 24 }}
          fill
          src={src}
        />
        <FavoriteButton />
      </div>
      {isMedium && <p>{name}</p>}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-bold leading-4">{cost} тг.</p>
          <Badge className="self-start rounded-full px-2 py-0.5">
            {normalizePrice(bonuses)}
          </Badge>
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
