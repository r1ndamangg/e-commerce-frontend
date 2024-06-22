"use client"
import { FC } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui"

export const InputOtp: FC = () => {
  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Введите код из SMS</h2>
        <p className="text-sm font-semibold text-[#8988A1]">
          Мы используем одноразовый код в качестве пароля для регистрации и
          входа в аккаунт
        </p>
      </div>
      <form className="mt-10">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup className="mx-auto flex justify-center">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button variant="primary" size="m" className="mt-10 w-full text-base">
          Готово
        </Button>
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-[#3345EA]">
          Отправить код повторно (30с)
        </p>
      </div>
    </div>
  )
}
