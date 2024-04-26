import ProductCard from "@/components/product-card"
import { getFileUrl } from "@/lib/assets"
import { getProducts } from "@/services/products"
import { ProductCategory } from "@/types/category"
import Filters from "./filters"
import Link from "next/link"
interface Props {
  category: ProductCategory
}
const Products = async ({ category }: Props) => {
  const { data: products, meta } = await getProducts(category.slug)

  return (
    <div className="flex h-full flex-col gap-2">
      <Filters categoryName={category.name} pagination={meta.pagination} />
      <div className="grid grid-cols-2 gap-y-2 bg-white p-4">
        {products.map(({ id, bonusPrice, name, price, slug, images }) => (
          <Link href={`/products/${slug}`}>
            <ProductCard
              size="medium"
              key={id}
              bonuses={bonusPrice}
              cost={price}
              name={name}
              src={getFileUrl(images?.[0].url || "")}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products
