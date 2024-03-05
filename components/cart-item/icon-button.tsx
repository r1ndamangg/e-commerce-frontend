import { FC, PropsWithChildren } from "react"

const IconButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="flex items-center justify-center rounded-lg border-[1.5px] border-blue-600 p-2">
      {children}
    </button>
  )
}

export default IconButton
