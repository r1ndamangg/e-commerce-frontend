export interface Product {
  id: number
  name: string
  price: number
  slug: string
  bonusPrice: number
  images?: { id: string; url: string }[]
}
