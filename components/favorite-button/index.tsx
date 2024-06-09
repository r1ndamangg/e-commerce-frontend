"use client"
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import clsx from "clsx"
import { useState } from "react"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

const FavoriteButton = ({
  size = "md",
  className,
  onClick,
  ...props
}: Props) => {
  const sizes = {
    sm: 20,
    md: 24,
    lg: 28,
  }
  const [clicked, setClicked] = useState(false)

  return (
    <button
      {...props}
      className={clsx(
        "bg-transparent px-[6px] py-[3px] text-blue-600 active:scale-125",
        className
      )}
      onClick={() => {
        setClicked(clicked => !clicked)
      }}
    >
      {clicked ? (
        <HeartIconSolid width={sizes[size]} />
      ) : (
        <HeartIconOutline width={sizes[size]} />
      )}
    </button>
  )
}

export default FavoriteButton
