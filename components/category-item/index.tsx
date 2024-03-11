import { getFileUrl } from "@/lib/assets"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

interface Props {
  name: string
  icon?: string
  childCategories?: string[]
}

const CategoryItem: React.FC<Props> = ({ name, icon }) => {
  return (
    <div className="flex w-full items-center gap-4">
      {icon && (
        <Image src={getFileUrl(icon)} alt={name} width={20} height={20} />
      )}
      <span className="w-full text-blue-900">{name}</span>
      <span className="text-grey-400">
        <ChevronRightIcon width={20} />
      </span>
    </div>
  )
}

export default CategoryItem
