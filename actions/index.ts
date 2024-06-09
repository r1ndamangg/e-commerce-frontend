"use server"

import { searchProducts as searchProductsService } from "@/services/products"

export const searchProducts = async (slugs?: string[], search?: string) => {
  return await searchProductsService(slugs, search)
}
