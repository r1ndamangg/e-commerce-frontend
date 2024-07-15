import PageHeader from "./lib/components/page-header"
import WeaklyOffers from "./lib/components/weakly-offers"
import WeaklyOfferBanner from "./lib/components/weakly-offer-banner"
import Categories from "./lib/components/categories"
import Products from "./lib/components/products"
import { getParentCategories } from "@/services/categories"

const Page = async () => {
  const categories = await getParentCategories()

  return (
    <div className="flex flex-col gap-2 pb-2">
      <PageHeader />
      <WeaklyOfferBanner />
      <WeaklyOffers />
      <Categories items={categories} />
      <Products />
    </div>
  )
}

export default Page
