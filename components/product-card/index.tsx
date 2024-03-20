"use client"
import { normalizePrice } from "@/lib/normalizers"
import Image from "next/image"
import FavoriteButton from "./favorite-button"
import { Badge } from "../ui/badge"

interface Props {
  src: string
  cost: number
  bonuses: number
  favorite?: boolean
}

const ProductCard: React.FC<Props> = ({ src, bonuses, cost, favorite }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[104px] w-[104px] rounded-lg bg-grey-0">
        <Image width={104} height={104} alt="Product card" src={src} />
        <FavoriteButton />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold leading-4">{cost} тг.</p>
        <Badge className="self-start">{normalizePrice(bonuses)}</Badge>
      </div>
    </div>
  )
}

export default ProductCard
