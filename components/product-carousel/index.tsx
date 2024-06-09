import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel"
import { Product } from "@/types/product"
import { getFileUrl } from "@/lib/assets"

interface Props {
  images: NonNullable<Product["images"]>
}

const ProductCarousel = ({ images }: Props) => {
  return (
    <Carousel className="w-full bg-white">
      <CarouselContent className="pb-7 pt-2">
        {images.map(({ id, url }) => (
          <CarouselItem key={id}>
            <div className="relative flex aspect-square w-full items-center justify-center p-6">
              <Image
                src={getFileUrl(url)}
                fill
                alt="image"
                style={{ objectFit: "contain" }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export default ProductCarousel
