"use client"
import ProductCard from "@/components/product-card"
import { getFileUrl } from "@/lib/assets"
import { searchProducts } from "@/actions"
import { ProductCategory } from "@/types/category"
import Filters from "./filters"
import Link from "next/link"
import EmptyState from "./empty-state"
import { useState, useEffect } from "react"
import Loading from "@/components/loading"

interface Props {
  categories: ProductCategory[]
  title: string
  search?: string
}

const Products = ({ categories, title, search }: Props) => {
  const [productsData, setProductsData] =
    useState<Awaited<ReturnType<typeof searchProducts>>>()

  const [error, setError] = useState<string>("")

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const data = await searchProducts(
          categories.map(({ slug }) => slug),
          search
        )
        setProductsData(data)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
          return
        }

        setError(JSON.stringify(e))
      }
    }

    getProductsData()
  }, [categories, search])

  if (error) return <div>{error}</div>

  if (!productsData) return <Loading />

  const { data: products, meta } = productsData

  if (!products.length) return <EmptyState />

  return (
    <div className="h-full flex-col gap-2">
      <Filters categoryName={title} pagination={meta.pagination} />
      <div className="grid grid-cols-2 gap-y-2 py-2">
        {products.map(({ bonusAmount, name, price, slug, images }) => (
          <Link href={`/products/${slug}`} key={slug}>
            <ProductCard
              size="medium"
              bonuses={bonusAmount}
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
