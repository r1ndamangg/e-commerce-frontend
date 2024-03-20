import PageHeader from "./lib/components/page-header"
import Categories from "./lib/components/categories"

const Page = () => {
  return (
    <>
      <PageHeader placeholder="Поиск по каталогу" />
      <div className="py-2">
        <Categories />
      </div>
    </>
  )
}

export default Page
