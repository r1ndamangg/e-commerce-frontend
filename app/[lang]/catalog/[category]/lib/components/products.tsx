interface Props {
  slug?: string
}

const getProducts = async (slug?: string) => {
  return []
}

const Products = async ({ slug }: Props) => {
  const items = await getProducts(slug)

  return <div>Products</div>
}

export default Products
