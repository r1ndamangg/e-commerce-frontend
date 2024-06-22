import { ProductDetails } from "@/types/product"
import ExpandableBlock from "./expandable-block"
import Markdown from "react-markdown"

interface Props {
  product: ProductDetails
}

const ProductDescription = ({ product }: Props) => {
  return (
    <ExpandableBlock title="Описание">
      <Markdown className="[&>ul]:ml-3 [&>ul]:list-disc">
        {product.description}
      </Markdown>
    </ExpandableBlock>
  )
}

export default ProductDescription
