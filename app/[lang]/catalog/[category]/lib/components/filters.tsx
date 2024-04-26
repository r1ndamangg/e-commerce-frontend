import { FilterIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Props {
  categoryName: string
  pagination: ResponseMeta["pagination"]
}

const Filters = ({ pagination, categoryName }: Props) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-4">
      <div className="flex justify-between gap-2">
        <div className="w-full">
          <h1 className="text-base font-bold leading-4 text-blue-900">
            {categoryName}
          </h1>
          <p className="text-xs font-medium leading-4 text-grey-700">
            {pagination.total} товаров
          </p>
        </div>
        <button className="flex-shrink-0 text-purple-600">
          <FilterIcon width={24} />
        </button>
      </div>
      <hr className="h-[1px] border-t-0 bg-purple-200" />
      <div className="flex max-w-full gap-2 overflow-x-scroll">
        <Badge closable className="flex-shrink-0" variant="outline">
          Фильтр 1, +1
        </Badge>
        <Badge className="flex-shrink-0" variant="outline">
          Фильтр 1, +1
        </Badge>
        <Badge className="flex-shrink-0" variant="outline">
          Фильтр 1, +1
        </Badge>
        <Badge className="flex-shrink-0" variant="outline">
          Фильтр 1, +1
        </Badge>
        <Badge className="flex-shrink-0" variant="outline">
          Фильтр 1, +1
        </Badge>
      </div>
    </div>
  )
}

export default Filters
