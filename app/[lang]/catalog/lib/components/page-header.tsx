"use client"
import SearchInput from "@/components/search-input"
import BackLink from "./back-link"
import { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

interface Props {
  placeholder: string
  backButton?: boolean
}

const PageHeader: React.FC<Props> = ({ placeholder, backButton }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [searchText, setSearchText] = useState(searchParams.get("search") || "")

  return (
    <div className="flex h-16 items-center gap-4 bg-white p-2">
      {backButton && <BackLink />}
      <SearchInput
        placeholder={placeholder}
        value={searchText}
        onSubmit={e => {
          e.preventDefault()
          const params = new URLSearchParams(searchParams.toString())
          params.set("search", searchText)
          router.replace(`${pathname}?${params.toString()}`)
        }}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default PageHeader
