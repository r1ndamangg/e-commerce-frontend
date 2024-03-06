import { FC } from "react"
import RefreshButton from "./refresh-button"

interface Props {
  title: string
}

const Header: FC<Props> = ({ title }) => {
  return (
    <header className="relative bg-white p-4 text-center">
      {title}
      <RefreshButton />
    </header>
  )
}

export default Header
