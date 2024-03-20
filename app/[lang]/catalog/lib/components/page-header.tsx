import SearchInput from "@/components/search-input"
import BackButton from "./back-button"

interface Props {
  placeholder: string
  backButton?: boolean
}

const PageHeader: React.FC<Props> = ({ placeholder, backButton }) => {
  return (
    <div className="flex h-16 items-center gap-4 bg-white p-2">
      {backButton && <BackButton />}
      <SearchInput placeholder={placeholder} />
    </div>
  )
}

export default PageHeader
