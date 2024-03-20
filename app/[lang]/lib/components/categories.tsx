"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { getFileUrl } from "@/lib/assets"
import { splitArrayByElementCount } from "@/lib/helpers"
import { ParentCategory } from "@/services/categories"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import Image from "next/image"

interface Props {
  items: ParentCategory[]
}

const Categories: React.FC<Props> = ({ items }) => {
  const categoryGroups = splitArrayByElementCount(items, 4)

  return (
    <div className="bg-white">
      <Carousel className="w-full" plugins={[WheelGesturesPlugin()]}>
        <CarouselContent>
          {categoryGroups.map(group => (
            <CarouselItem>
              <div className="flex w-full">
                {group.map(category => (
                  <CategoryItem name={category.name} icon={category.icon.url} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

interface CategoryItemProps {
  name: string
  icon: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon }) => (
  <div className="flex w-full flex-col items-center justify-center gap-2 p-2">
    <span className="rounded-lg bg-blue-0 p-2 text-blue-600">
      <Image
        src={getFileUrl(icon)}
        width={24}
        height={24}
        alt={`Category icon for ${name}`}
      />
    </span>
    <span className="text-sm font-bold">{name}</span>
  </div>
)

export default Categories
