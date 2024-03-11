import CategoryItem from "@/components/category-item"
import { getCategories } from "@/services/categories"
import Link from "next/link"
import React from "react"

const CategoryList = async () => {
  const categories = await getCategories()

  return (
    <ul className="flex flex-col gap-0.5">
      {categories.map(({ name, slug, icon }) => (
        <li key={slug} className="bg-white p-4">
          <Link href={`catalog/${slug}`}>
            <CategoryItem name={name} icon={icon?.url} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
