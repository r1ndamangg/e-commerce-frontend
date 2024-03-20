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
    <div className="relative w-full rounded-lg bg-grey-0">
      <Input
        className="h-8 border-0 bg-transparent px-4 py-2 leading-4 text-blue-900 placeholder:font-bold placeholder:text-grey-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span role="image" className="text-grey-500">
        <MagnifyingGlassIcon width={16} className="absolute right-4 top-2" />
      </span>
    </div>
  )
}

export default SearchInput
