import { ImageAsset } from "./asset"

export interface ProductCategory {
  id: number
  name: string
  description: string
  slug: string
  icon?: ImageAsset
}
