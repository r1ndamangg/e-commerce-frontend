import ProductCard from "@/components/product-card"

const WeaklyOffers = () => {
  return (
    <div className="flex h-[180px] w-full grid-rows-1 justify-between overflow-scroll bg-white p-4">
      <ProductCard
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
      <ProductCard
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
      <ProductCard
        bonuses={1000}
        cost={30000}
        src="/images/1.png"
        size="small"
      />
    </div>
  )
}

export default WeaklyOffers
