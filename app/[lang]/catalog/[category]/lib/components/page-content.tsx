import {
  getChildCategories,
  getParentCategories,
  getCategoryBySlug,
} from "@/services/categories"
import SubCategoriesList from "./sub-categories-list"
import Products from "./products"

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

  return !!subCategories.length ? (
    <SubCategoriesList items={subCategories} selected={category.name} />
  ) : (
    <Products slug={slug} />
  )
}

export default PageContent
