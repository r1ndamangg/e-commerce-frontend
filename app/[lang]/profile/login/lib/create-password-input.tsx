import { FC, useState } from "react"
import { Button, Input } from "@/components/ui"
interface Props {
  onSubmitRegister: (e: React.FormEvent<HTMLFormElement>) => void
  password?: string
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CreatePasswordInput: FC<Props> = ({
  onSubmitRegister,
  onChangePassword,
  password,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("")
  const [blurred, setBlurred] = useState(false)

  const isPasswordsNotMatch =
    blurred && !!password && !!confirmPassword && password !== confirmPassword

  const isButtonDisabled =
    (!password && !confirmPassword) || password !== confirmPassword

  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Придумайте пароль</h2>
        <p className="text-sm font-semibold text-[#8988A1]">
          Вы сможете авторизаваться используя этот пароль
        </p>
      </div>
      <form onSubmit={onSubmitRegister}>
        <Input
          type="password"
          className="mt-10"
          onChange={onChangePassword}
          value={password}
          placeholder="Введите пароль"
        />
        <Input
          type="password"
          className="mt-4"
          onChange={e => {
            setBlurred(false)
            setConfirmPassword(e.target.value)
          }}
          onBlur={() => {
            setBlurred(true)
          }}
          value={confirmPassword}
          placeholder="Повторите пароль"
        />
        <div className="mt-2 h-4">
          {isPasswordsNotMatch && (
            <span className="mt-2 text-xs text-red-600">
              Пароли не совпадают
            </span>
          )}
        </div>
        <Button
          variant="primary"
          size="m"
          className="mt-8 w-full text-base disabled:text-grey-600 disabled:opacity-50"
          disabled={isButtonDisabled}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  )
}
