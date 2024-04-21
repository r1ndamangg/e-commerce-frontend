import PageHeader from "../lib/components/page-header"
import PageContent from "./lib/components/page-content"

const Page = ({ params }: PageWithParams) => {
  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" backButton />
      <div className="py-2">
        <PageContent slug={params.category} />
      </div>
    </>
  )
}

export default Page
