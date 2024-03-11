import { ProductCategory } from "@/types/category"
import { apiURL } from "./config"

export const getCategories = async (): Promise<ProductCategory[]> => {
  try {
    const response = await fetch(
      `${apiURL}/product-categories/get-parent-categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
        },
      }
    )

    const json = await response.json()

    return json
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error(
      `An error occurred while fetching categories. ${JSON.stringify(error)}`
    )
  }
}

export const getChildCategories = async (slug: string) => {
  const response = await fetch(
    `${apiURL}/product-categories/get-child-categories/${slug}`
  )
}
