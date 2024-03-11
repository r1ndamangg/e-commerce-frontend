import SearchInput from "@/components/search-input"
import PageHeader from "./lib/components/page-header"
import CategoryList from "./lib/components/category-list"

const Page = () => {
  return (
    <>
      <PageHeader />
      <div className="py-2">
        <CategoryList />
      </div>
    </>
  )
}

export default Page
