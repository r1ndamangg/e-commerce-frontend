import { getProductBySlug } from "@/services/products"
import PageHeader from "./lib/components/page-header"
import ProductCarousel from "@/components/product-carousel"
import ProductTitle from "./lib/components/product-title"
import ProductVariants from "./lib/components/product-variants"
import ProductDescription from "./lib/components/product-description"
import ProductCharacteristics from "./lib/components/product-characterisrics"
import AddToCart from "./lib/components/add-to-cart"

const Page = async ({ params }: PageWithParamsProps) => {
  const product = await getProductBySlug(params.slug)

  return (
    <>
      <PageHeader product={product} />
      <main className="flex max-h-[calc(100%-128px)] flex-col gap-2 overflow-scroll py-2">
        {product.images && <ProductCarousel images={product.images} />}
        <ProductTitle product={product} />
        <ProductVariants product={product} />
        <ProductDescription />
        <ProductCharacteristics product={product} />
        <AddToCart product={product} />
      </main>
    </>
  )
}

export default Page
