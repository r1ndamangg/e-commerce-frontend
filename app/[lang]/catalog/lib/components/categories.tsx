import { getParentCategories } from "@/services/categories"
import CategoryList from "./category-list"

const Categories = async () => {
  const categories = await getParentCategories()

  return <CategoryList items={categories} />
}

export default Categories
