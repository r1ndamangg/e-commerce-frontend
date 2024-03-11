"use client"

import { Input } from "@/components/ui"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

interface Props {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative rounded-lg bg-grey-0 text-grey-500">
      <Input
        className="h-8 border-0 bg-transparent px-4 py-2 leading-4 placeholder:text-current"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <MagnifyingGlassIcon width={16} className="absolute right-4 top-2" />
    </div>
  )
}

export default SearchInput
