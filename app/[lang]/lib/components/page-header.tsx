import SearchInput from "@/components/search-input"
import Balance from "./balance"
import MenuToggler from "./menu-toggler"

const PageHeader = () => {
  return (
    <div className="flex h-16 items-center gap-4 bg-white p-4">
      <MenuToggler />
      <SearchInput placeholder="Поиск" />
      <Balance />
    </div>
  )
}

export default PageHeader
