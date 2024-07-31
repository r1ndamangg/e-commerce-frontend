import { FC } from "react"
import { Button, Input } from "@/components/ui"
interface Props {
  onSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void
  password?: string
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput: FC<Props> = ({
  onSubmitLogin,
  onChangePassword,
  password,
}) => {
  const isButtonDisabled = !password

  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Введите пароль</h2>
      </div>
      <form onSubmit={onSubmitLogin}>
        <Input
          type="password"
          className="mt-10"
          onChange={onChangePassword}
          value={password}
          placeholder="Введите пароль"
        />
        <Button
          variant="primary"
          size="m"
          className="mt-8 w-full text-base disabled:text-grey-600 disabled:opacity-50"
          disabled={isButtonDisabled}
        >
          Войти
        </Button>
      </form>
    </div>
  )
}
