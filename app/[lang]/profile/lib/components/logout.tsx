import { FC } from "react"
import { Button } from "@/components/ui"

const Logout: FC = () => {
  return (
    <div className="mb-6 mt-3 flex bg-white px-4 py-2">
      <Button variant="secondary" className="ml-auto">
        Выход
      </Button>
    </div>
  )
}

export default Logout
