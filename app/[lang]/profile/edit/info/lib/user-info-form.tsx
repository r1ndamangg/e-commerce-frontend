import { FC } from "react"
import { Button, Input } from "@/components/ui"

const UserInfoForm: FC = () => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <h2 className="text-base font-bold">Контакты</h2>

      <form>
        <div className="mt-4 flex flex-col gap-2">
          <label className="text-xs">Имя Фамилия*</label>
          <Input
            className="focus-visible:ring-ring:focus-visible"
            type="text"
            placeholder="Имя Фамилия"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label className="text-xs">Контактный телефон*</label>
          <Input type="number" placeholder="+ 7" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label className="text-xs">Email</label>
          <Input type="email" placeholder="example@mail.com" />
        </div>

        <div className="mt-4 flex w-full">
          <Button type="submit" className="ml-auto" variant="primary">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  )
}

export default UserInfoForm
