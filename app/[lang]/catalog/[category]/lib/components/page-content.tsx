import SubCategoriesList from "./sub-categories-list"
import Products from "./products"
import { Suspense } from "react"
import { ProductCategory } from "@/types/category"

interface Props {
  category: ProductCategory
  subCategories: ProductCategory[]
}

const PageContent: React.FC<Props> = ({ category, subCategories }) => {
  return !!subCategories.length ? (
    <SubCategoriesList
      items={subCategories}
      selected={category.name}
      slug={category.slug}
    />
  ) : (
    <Suspense fallback={<span>...Loading</span>}>
      <Products category={category} />
    </Suspense>
  )
}

export default PageContent
