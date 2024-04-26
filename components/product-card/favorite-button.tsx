import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { useState } from "react"

const FavoriteButton = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className="absolute left-1 top-1 bg-transparent px-[6px] py-[3px] text-blue-600 active:scale-125"
      onClick={() => {
        setClicked(clicked => !clicked)
      }}
    >
      {clicked ? (
        <HeartIconSolid width={20} />
      ) : (
        <HeartIconOutline width={20} />
      )}
    </button>
  )
}

export default FavoriteButton
