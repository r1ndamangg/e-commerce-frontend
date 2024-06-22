import { FC } from "react"
import { Button, Input } from "@/components/ui"
import Link from "next/link"

interface Props {
  handelClick: () => void
}

export const PhoneLogin: FC<Props> = ({ handelClick }) => {
  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Введите свой номер телефона</h2>
        <p className="text-sm font-semibold text-[#8988A1]">
          Ваш номер будет использоваться как логин
        </p>
      </div>
      <form>
        <Input type="number" className="mt-10" />
        <Button
          variant="primary"
          size="m"
          className="mt-10 w-full text-base"
          onClick={handelClick}
        >
          Войти или зарегистрироваться
        </Button>
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-[#8988A1]">
          Нажимая на кнопку, вы автоматически принимаете условия{" "}
          <Link href="/" className="text-[#3345EA]">
            пользовательского соглашения
          </Link>
        </p>
      </div>
    </div>
  )
}
