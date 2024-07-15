import ProductCard from "@/components/product-card"

const WeaklyOffers = () => {
  return (
    <div className="grid w-full grid-cols-3 grid-rows-1 overflow-scroll bg-white p-4">
      <ProductCard
        name="Product Name"
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
      <ProductCard
        name="Product Name"
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
      <ProductCard
        name="Product Name"
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
    </div>
  )
}

export default WeaklyOffers
