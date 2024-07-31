import { FC } from "react"
import { Button } from "@/components/ui"
import { logout } from "@/actions/auth"

const Logout: FC = () => {
  return (
    <div className="mb-6 mt-3 flex bg-white px-4 py-2">
      <Button
        variant="destructive"
        className="ml-auto"
        size="xs"
        onClick={() => logout()}
      >
        Выход
      </Button>
    </div>
  )
}

export default Logout
