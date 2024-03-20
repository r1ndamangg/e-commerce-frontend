import {
  getChildCategories,
  getParentCategories,
  getCategoryBySlug,
} from "@/services/categories"
import SubCategoriesList from "./sub-categories-list"

interface Props {
  slug: string
}

export async function generateStaticParams() {
  const categories = await getParentCategories()

  return categories.map(({ slug }) => ({
    slug,
  }))
}

const SubCategories: React.FC<Props> = async ({ slug }) => {
  const [category, subCategories] = await Promise.all([
    getCategoryBySlug(slug),
    getChildCategories(slug),
  ])

  return <SubCategoriesList items={subCategories} selected={category.name} />
}

export default SubCategories
