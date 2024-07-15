import { FC } from "react"
import { Button, Input } from "@/components/ui"
import Link from "next/link"
interface Props {
  onSubmitPhoneLogin: (e: React.FormEvent<HTMLFormElement>) => void
  phone?: string
  onChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlurPhone: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocusPhone: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PhoneLogin: FC<Props> = ({
  onSubmitPhoneLogin,
  onChangePhone,
  onBlurPhone,
  onFocusPhone,
  phone,
}) => {
  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Введите свой номер телефона</h2>
        <p className="text-sm font-semibold text-[#8988A1]">
          Ваш номер будет использоваться как логин
        </p>
      </div>
      <form onSubmit={onSubmitPhoneLogin}>
        <Input
          type="tel"
          className="mt-10"
          placeholder="+7"
          onChange={onChangePhone}
          value={phone}
          onFocus={onFocusPhone}
          onBlur={onBlurPhone}
        />
        <Button
          disabled={!phone || phone.length < 16}
          variant="primary"
          size="m"
          className="mt-10 w-full text-base disabled:bg-grey-300 disabled:text-grey-600 disabled:opacity-50"
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
