import PageHeader from "./lib/components/page-header"
import PageContent from "./lib/components/page-content"
import { getParentCategories } from "@/services/categories"

const Page = async () => {
  const categories = await getParentCategories()

  return (
    <div className="h-full">
      <PageHeader placeholder="Поиск по каталогу" />
      <div className="py-2">
        <PageContent categories={categories} />
      </div>
    </div>
  )
}

export default Page
