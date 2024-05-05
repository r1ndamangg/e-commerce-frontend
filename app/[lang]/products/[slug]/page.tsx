import { getProductBySlug } from "@/services/products"
import PageHeader from "./lib/components/page-header"

const Page = async ({ params }: PageWithParamsProps) => {
  const product = await getProductBySlug(params.slug)

  return <PageHeader product={product} />
}

export default Page
