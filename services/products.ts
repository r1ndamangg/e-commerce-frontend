import { Product } from "@/types/product"
import { apiURL } from "./config"

export const getProducts = async (
  slug?: string
): Promise<RequestWithPagination<Product>> => {
  const filters = slug
    ? `?filters[product_category][slug][$eq]=${slug}&fields[0]=name&fields[1]=price&fields[2]=slug&fields[3]=bonusPrice&populate[images][fields][0]=url`
    : ""

  const response = await fetch(`${apiURL}/products${filters}`, {
    headers: {
      Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
    },
  })

  const json = await response.json()

  return json
}
