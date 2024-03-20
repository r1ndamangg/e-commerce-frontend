import ProductCard from "@/components/product-card"

const WeaklyOffers = () => {
  return (
    <div className="grid w-full auto-cols-auto grid-cols-3 gap-2 bg-white p-4">
      <ProductCard bonuses={1000} cost={30000} src="/images/1.png" />
      <ProductCard bonuses={1000} cost={30000} src="/images/1.png" />
      <ProductCard bonuses={1000} cost={30000} src="/images/1.png" />
    </div>
  )
}

export default WeaklyOffers
