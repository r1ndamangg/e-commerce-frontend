import { ProductCategory } from "@/types/category"
import { apiURL, handleError } from "./config"

export const getCategoryBySlug = async (
  slug: string
): Promise<ProductCategory> => {
  try {
    const response = await fetch(
      `${apiURL}/product-categories/category-by-slug/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
        },
      }
    )

    const json = await response.json()

    return json
  } catch (e) {
    return handleError(e)
  }
}

export interface ParentCategory extends ProductCategory {
  icon: NonNullable<ProductCategory["icon"]>
}

export const getParentCategories = async (): Promise<ParentCategory[]> => {
  try {
    const response = await fetch(
      `${apiURL}/product-categories/parent-categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
        },
      }
    )

    const json = await response.json()

    return json
  } catch (e) {
    return handleError(e)
  }
}

export const getChildCategories = async (
  slug: string
): Promise<ProductCategory[]> => {
  try {
    const response = await fetch(
      `${apiURL}/product-categories/child-categories/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
        },
      }
    )

    const json = await response.json()

    return json
  } catch (e) {
    return handleError(e)
  }
}
