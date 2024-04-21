import ProductCard from "@/components/product-card"
import React from "react"

const Products = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white p-4">
      <ProductCard bonuses={1000} cost={30000} src="/images/1.png" />
      <ProductCard bonuses={1000} cost={30000} src="/images/1.png" />
    </div>
  )
}

export default Products
