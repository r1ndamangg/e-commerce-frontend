import SearchInput from "@/components/search-input"
import BackLink from "./back-link"

interface Props {
  placeholder: string
  backButton?: boolean
}

const PageHeader: React.FC<Props> = ({ placeholder, backButton }) => {
  return (
    <div className="flex h-16 items-center gap-4 bg-white p-2">
      {backButton && <BackLink />}
      <SearchInput placeholder={placeholder} />
    </div>
  )
}

export default PageHeader
