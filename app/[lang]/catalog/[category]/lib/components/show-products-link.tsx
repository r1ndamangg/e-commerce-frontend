"use client"
import CategoryItem from "@/components/category-item"
import Link from "next/link"
import { useParams } from "next/navigation"

const ShowProductsLink = () => {
  const params = useParams()

  return (
    <li className="bg-white p-4">
      <Link href={`/catalog/${params.slug}`}>
        <CategoryItem name="Все товары" />
      </Link>
    </li>
  )
}

export default ShowProductsLink
