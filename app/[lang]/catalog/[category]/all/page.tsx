import { getCategoryBySlug, getChildCategories } from "@/services/categories"
import Products from "../lib/components/products"
import PageHeader from "../../lib/components/page-header"

const Page = async ({ params }: PageWithParamsProps) => {
  const [category, subCategories] = await Promise.all([
    getCategoryBySlug(params.category),
    getChildCategories(params.category),
  ])

  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" backButton />
      <div className="mb-16 h-full overflow-scroll py-2">
        <Products categories={subCategories} title={category.name} />
      </div>
    </>
  )
}

export default Page
