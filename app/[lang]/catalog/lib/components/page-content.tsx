"use client"
import CategoryList from "./category-list"
import Products from "@/components/products"
import { ProductCategory } from "@/types/category"
import { useSearchParams } from "next/navigation"

interface Props {
  categories: ProductCategory[]
}

const PageContent: React.FC<Props> = ({ categories }) => {
  const searchParmas = useSearchParams()
  const searchText = searchParmas.get("search") || ""

  return !!categories.length && !searchText ? (
    <CategoryList items={categories} />
  ) : (
    <Products categories={[]} title={"Все товары"} search={searchText} />
  )
}

export default PageContent
