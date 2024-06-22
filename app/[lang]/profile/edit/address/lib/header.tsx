import { FC } from "react"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Props {
  title: string
}

const Header: FC<Props> = ({ title }) => {
  return (
    <header className="relative flex items-center bg-white p-4 text-center">
      <Button variant="link" className="self-start" size="icon">
        <ChevronLeft className="h-6 w-6 text-black" />
      </Button>
      <div className="flex items-center">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

export default Header
