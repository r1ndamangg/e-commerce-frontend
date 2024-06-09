import {
  getCategoryBySlug,
  getChildCategories,
  getParentCategories,
} from "@/services/categories"
import PageHeader from "../lib/components/page-header"
import PageContent from "./lib/components/page-content"

export async function generateStaticParams() {
  const categories = await getParentCategories()

  return categories.map(({ slug }) => ({
    slug,
  }))
}

const Page = async ({ params }: PageWithParamsProps) => {
  const [category, subCategories] = await Promise.all([
    getCategoryBySlug(params.category),
    getChildCategories(params.category),
  ])

  console.log(category, subCategories)

  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" backButton />
      <div className="mb-16 h-full overflow-scroll py-2">
        <PageContent category={category} subCategories={subCategories} />
      </div>
    </>
  )
}

export default Page
