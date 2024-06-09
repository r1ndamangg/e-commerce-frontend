"use client"
import SubCategoriesList from "./sub-categories-list"
import Products from "@/components/products"
import { ProductCategory } from "@/types/category"
import { useSearchParams } from "next/navigation"

interface Props {
  category: ProductCategory
  subCategories: ProductCategory[]
}

const PageContent: React.FC<Props> = ({ category, subCategories }) => {
  const searchParmas = useSearchParams()
  const searchText = searchParmas.get("search") || ""

  return !!subCategories.length || !!searchText ? (
    <SubCategoriesList
      items={subCategories}
      selected={category.name}
      slug={category.slug}
    />
  ) : (
    <Products
      categories={[category]}
      title={category.name}
      search={searchText}
    />
  )
}

export default PageContent
