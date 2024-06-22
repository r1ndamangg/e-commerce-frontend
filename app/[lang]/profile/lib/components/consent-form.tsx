import { FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const ConsentForm: FC = () => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Я ознакомлен и принимаю условия платформы
          </label>
          <Checkbox id="terms" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="news"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Хочу получать новостную рассылку
          </label>
          <Checkbox id="news" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <label
            htmlFor="notification"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Хочу получать уведомления о заказах
          </label>
          <Checkbox id="notification" />
        </div>
      </div>
    </div>
  )
}

export default ConsentForm
