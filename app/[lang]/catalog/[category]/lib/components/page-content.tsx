import {
  getChildCategories,
  getParentCategories,
  getCategoryBySlug,
} from "@/services/categories"
import SubCategoriesList from "./sub-categories-list"
import Products from "./products"
import { Suspense } from "react"

interface Props {
  slug: string
}

export async function generateStaticParams() {
  const categories = await getParentCategories()

  return categories.map(({ slug }) => ({
    slug,
  }))
}

const PageContent: React.FC<Props> = async ({ slug }) => {
  const [category, subCategories] = await Promise.all([
    getCategoryBySlug(slug),
    getChildCategories(slug),
  ])

  return (
    <Suspense fallback={<span>...Loading</span>}>
      {!!subCategories.length ? (
        <SubCategoriesList items={subCategories} selected={category.name} />
      ) : (
        <Products category={category} />
      )}
    </Suspense>
  )
}

export default PageContent
