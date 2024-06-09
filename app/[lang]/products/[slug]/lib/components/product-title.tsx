import FavoriteButton from "@/components/favorite-button"
import { Product } from "@/types/product"

interface Props {
  product: Product
}
const ProductTitle = ({ product }: Props) => {
  return (
    <div className="flex gap-2 bg-white p-4">
      <div className="flex w-full flex-col">
        <h2 className="text-lg font-semibold leading-5 text-blue-900">
          {product.name}
        </h2>
        <span className="text-xs text-grey-700">
          Идентификатор товара: {product.id}
        </span>
      </div>
      <FavoriteButton className="shrink-0" />
    </div>
  )
}

export default ProductTitle
