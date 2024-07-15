"use client"
import { FC, useEffect, useRef, useState } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui"
import { sendOTP, verifyOTP } from "@/services/auth"
import { normalizePhone } from "@/lib/normalizers"

interface Props {
  phone: string
  changeStep: (step: "password") => void
}

export const InputOtp: FC<Props> = ({ phone, changeStep }) => {
  const [seconds, setSeconds] = useState(5)
  const [otp, setOTP] = useState<string>("")

  const intervalRef = useRef<NodeJS.Timeout>()

  const initTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1)
    }, 1000)
  }

  useEffect(() => {
    initTimer()

    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current)
    }
  }, [seconds])

  const resendCode = async () => {
    await sendOTP(normalizePhone(phone))
    setOTP("")
    initTimer()
    setSeconds(5)
  }

  const onSubmitOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const phoneNumber = normalizePhone(phone)

    const verificationStatus = await verifyOTP({
      code: otp,
      phone: phoneNumber,
    })

    if (verificationStatus === "approved") {
      changeStep("password")
    }
  }

  return (
    <div className="mx-auto w-full max-w-[306px] rounded-lg bg-white p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold">Введите код из SMS</h2>
        <p className="text-sm font-semibold text-[#8988A1]">
          Мы используем одноразовый код в качестве пароля для регистрации и
          входа в аккаунт
        </p>
      </div>
      <form className="mt-10" onSubmit={onSubmitOTP}>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          onChange={code => setOTP(code)}
          value={otp}
        >
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
        {seconds > 0 ? (
          <p className="text-center text-sm text-[#3345EA]">
            Отправить код повторно ({seconds}с)
          </p>
        ) : (
          <Button
            className="w-full text-center text-sm text-[#3345EA]"
            variant="link"
            onClick={resendCode}
          >
            Отправить код повторно
          </Button>
        )}
      </div>
    </div>
  )
}
