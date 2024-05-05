import BackButton from "@/components/back-button"
import { Product } from "@/types/product"

interface Props {
  product: Product
}

const PageHeader = ({ product }: Props) => {
  return (
    <div className="flex h-16 items-center gap-4 bg-white p-4">
      <div className="flex h-16 items-center gap-4 bg-white p-2">
        <BackButton href="/" />
        <h1></h1>
      </div>
    </div>
  )
}

export default PageHeader
