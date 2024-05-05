import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import React from "react"

const ProductNotFound = () => {
  return (
    <div className="flex max-w-[228px] flex-col items-center gap-8 text-blue-600">
      <span className="rounded-3xl bg-blue-0">
        <MagnifyingGlassCircleIcon
          className="rotate-90"
          width={134}
          height={134}
        />
      </span>
      <div className="flex flex-col items-center">
        <span className="text-2xl">Товар не найден :(</span>
        <span>Попробуйте найти что-то еще</span>
      </div>
    </div>
  )
}

export default ProductNotFound
