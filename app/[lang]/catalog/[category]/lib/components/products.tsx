import ProductCard from "@/components/product-card"
import { getFileUrl } from "@/lib/assets"
import { getProductsByCategories } from "@/services/products"
import { ProductCategory } from "@/types/category"
import Filters from "./filters"
import Link from "next/link"
import ProductNotFound from "@/components/product-not-found"
import EmptyState from "./empty-state"
interface Props {
  categories: ProductCategory[]
  title: string
}

const Products = async ({ categories, title }: Props) => {
  const { data: products, meta } = await getProductsByCategories(
    categories.map(({ slug }) => slug)
  )

  if (!products.length) return <EmptyState />

  return (
    <div className="h-full flex-col gap-2">
      <Filters categoryName={title} pagination={meta.pagination} />
      <div className="grid grid-cols-2 gap-y-2 bg-white p-4">
        {products.map(({ bonusPrice, name, price, slug, images }) => (
          <Link href={`/products/${slug}`} key={slug}>
            <ProductCard
              size="medium"
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
