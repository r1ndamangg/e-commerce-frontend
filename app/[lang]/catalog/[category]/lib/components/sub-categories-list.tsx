import CategoryItem from "@/components/category-item"
import { ProductCategory } from "@/types/category"
import Link from "next/link"

interface Props {
  items: ProductCategory[]
  selected: string
}

const SubCategoriesList: React.FC<Props> = ({ items, selected }) => {
  return (
    <ul className="flex flex-col gap-0.5">
      <li className="bg-white p-4 font-extrabold text-blue-600">{selected}</li>
      <li className="bg-white p-4">
        <Link href={`/catalog`}>
          <CategoryItem name="Все товары" />
        </Link>
      </li>
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

export default SubCategoriesList
