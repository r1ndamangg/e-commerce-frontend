import { getCategoryBySlug } from "@/services/categories"
import Products from "../lib/components/products"
import PageHeader from "../../lib/components/page-header"

const Page = async ({ params }: PageWithParamsProps) => {
  const category = await getCategoryBySlug(params.category)

  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" backButton />
      <div className="mb-16 h-full overflow-scroll py-2">
        <Products category={category} />
      </div>
    </>
  )
}

export default Page
