import PageHeader from "./lib/components/page-header"
import WeaklyOffers from "./lib/components/weakly-offers"
import WeaklyOfferBanner from "./lib/components/weakly-offer-banner"
import Categories from "./lib/components/categories"
import { getParentCategories } from "@/services/categories"

const Page = async () => {
  const categories = await getParentCategories()
  return (
    <div className="mb-16 flex h-full flex-col gap-2 py-2">
      <PageHeader />
      <WeaklyOfferBanner />
      <WeaklyOffers />
      <Categories items={categories} />
    </div>
  )
}

export default Page
