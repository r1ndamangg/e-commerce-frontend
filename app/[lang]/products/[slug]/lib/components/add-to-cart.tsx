import { Button } from "@/components/ui"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/types/product"

interface Props {
  product: Product
}

const AddToCart = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-2.5 bg-white p-4">
      <div className="flex justify-between gap-2">
        <Badge variant="secondary">+{product.bonusPrice} бонусов</Badge>
        <span className="text-lg font-bold text-blue-900">
          {product.price} тг
        </span>
      </div>
      <Button variant="primary" size="m">
        Добавить в корзину
      </Button>
    </div>
  )
}

export default AddToCart
