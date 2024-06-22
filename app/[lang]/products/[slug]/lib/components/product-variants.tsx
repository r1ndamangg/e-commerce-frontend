import { Badge } from "@/components/ui/badge"
import { getFileUrl } from "@/lib/assets"
import { ProductDetails } from "@/types/product"
import Image from "next/image"
import Link from "next/link"

interface Props {
  product: ProductDetails
}

const ProductVariants = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-2.5 bg-white p-4 leading-none">
      <div className="flex flex-col gap-2">
        <p>
          Цвет: <span className="text-gray-500">{product.color?.name}</span>
        </p>
        <div className="flex gap-2 overflow-x-scroll">
          {product.colors?.map(({ id, name, image, slug }) => (
            <Badge key={id} variant="outline" className="shrink-0" title={name}>
              <Link href={`/products/${slug}`}>
                <div className="relative h-[66px] w-[66px]">
                  <Image
                    src={getFileUrl(image)}
                    alt={name}
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </div>
              </Link>
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Объем встроенной памяти:
          <span className="text-gray-500">{product.memory?.capacity}</span>
        </p>
        <div className="flex gap-2 overflow-x-scroll">
          {product.memories?.map(({ id, capacity, slug, unit }) => (
            <Link key={id} href={`/products/${slug}`}>
              <Badge variant="outline" className="shrink-0">
                {capacity} {unit}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductVariants
