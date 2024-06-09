import BackButton from "@/components/back-button"
import { Product } from "@/types/product"
import { ShareIcon } from "@heroicons/react/16/solid"

interface Props {
  product: Product
}

const PageHeader = ({ product }: Props) => {
  return (
    <div className="flex h-16 w-full items-center gap-4 bg-white p-4">
      <div className="flex h-16 w-full items-center justify-between gap-4 bg-white p-2">
        <BackButton href="/catalog" className="shrink-0" />
        <h1 className="w-full text-center text-sm">{product.name}</h1>
        <ShareIcon width={24} height={24} className="shrink-0" />
      </div>
    </div>
  )
}

export default PageHeader
