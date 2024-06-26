import CategoryItem from "@/components/category-item"
import { ProductCategory } from "@/types/category"
import Link from "next/link"

interface Props {
  items: ProductCategory[]
}

const CategoryList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map(({ name, slug, icon }) => (
        <li key={slug} className="bg-white p-4">
          <Link href={`catalog/${slug}`}>
            <CategoryItem name={name} icon={icon?.url} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
