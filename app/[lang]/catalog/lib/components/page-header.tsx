import SearchInput from "@/components/search-input"

const PageHeader = () => {
  return (
    <div className="h-16 bg-white p-4">
      <SearchInput placeholder="Поиск по каталогу" />
    </div>
  )
}

export default PageHeader
