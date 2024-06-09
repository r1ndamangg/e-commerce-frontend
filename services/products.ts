"server only"

import { Product, ProductDetails } from "@/types/product"
import { apiURL } from "./config"

export const searchProducts = async (
  slugs?: string[],
  search?: string
): Promise<RequestWithPagination<Product>> => {
  try {
    const params = new URLSearchParams()
    params.set("fields[0]", "name")
    params.set("fields[1]", "price")
    params.set("fields[2]", "slug")
    params.set("fields[3]", "bonusPrice")
    params.set("populate[images][fields][0]", "url")
    if (slugs) {
      slugs.forEach((slug, index) => {
        params.set(`filters[product_category][slug][$in][${index}]`, slug)
      })
    }
    search && params.set("filters[name][$containsi]", search)

    const filters = slugs ? `?${params.toString()}` : ""

    const response = await fetch(`${apiURL}/products${filters}`, {
      headers: {
        Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
      },
    })

    const json = await response.json()

    return json
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }

    throw new Error(`Could not get Products. Reason ${JSON.stringify(e)}`)
  }
}

export const getProductBySlug = async (
  slug: string
): Promise<ProductDetails> => {
  try {
    const response = await fetch(
      // `${apiURL}/products?filters[slug][$eq]=${slug}&populate[images][fields][0]=url&populate[color][fields]&populate[memory][fields]`,
      `${apiURL}/products/product-details/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const json = await response.json()

    return json
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }

    throw new Error(`Could not get Product. Reason ${JSON.stringify(e)}`)
  }
}
