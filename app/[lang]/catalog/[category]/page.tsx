import PageHeader from "../lib/components/page-header"
import SubCategories from "./lib/components/sub-categories"

const Page = ({ params }: PageWithParams) => {
  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" backButton />
      <div className="py-2">
        <SubCategories slug={params.category} />
      </div>
    </>
  )
}

export default Page
