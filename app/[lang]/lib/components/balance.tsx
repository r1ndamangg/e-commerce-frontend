import { CircleStackIcon } from "@heroicons/react/16/solid"

const Balance = () => {
  return (
    <button className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 p-2 text-grey-0 active:bg-blue-700">
      <span className="text-xs font-bold">10 000</span>
      <CircleStackIcon width={16} />
    </button>
  )
}

export default Balance
