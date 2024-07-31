"use client"
import { FC, useState } from "react"
import { PhoneLogin } from "./lib/phone-login"
import { InputOtp } from "./lib/input-otp"
import { formatPhoneNumber, normalizePhone } from "@/lib/normalizers"
import { PasswordInput } from "./lib/password-input"
import {
  sendOTP,
  getUserStatus,
  register,
  login,
  signin,
} from "@/services/auth"
import { CreatePasswordInput } from "./lib/create-password-input"
import { useRouter } from "next/navigation"

const steps = {
  phone: PhoneLogin,
  password: PasswordInput,
  create_password: CreatePasswordInput,
  code: InputOtp,
}

const Login: FC = () => {
  const router = useRouter()
  const [step, setStep] = useState<keyof typeof steps>("phone")

  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmitPhoneLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const phoneNumber = normalizePhone(phone)
    const userStatus = await getUserStatus(phoneNumber)
    if (userStatus === "REGISTERED") {
      setStep("password")
    }

    if (userStatus === "NOT_REGISTERED") {
      const verificationStatus = await sendOTP(phoneNumber)
      if (verificationStatus === "pending") {
        setStep("code")
      }
    }
  }

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const phoneNumber = normalizePhone(phone)
    try {
      await signin({ identifier: phoneNumber, password })
      router.push("/profile")
    } catch (e) {
      console.error(e)
    }
  }

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPhone(formatPhoneNumber(value.substring(3)))
  }

  const handleFocusPhone = () => {
    if (!phone.length) setPhone("+7 ")
  }

  const handleBlurPhone = () => {
    if (phone.length <= 3) setPhone("")
  }

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const phoneNumber = normalizePhone(phone)
    await register({ phone: phoneNumber, password })
    ;("use server")
    await login({ identifier: phoneNumber, password })
  }

  const CurrentStep = steps[step]

  return (
    <section className="h-full bg-[url('/images/login-bg.png')] bg-cover">
      <div className="flex h-full flex-col justify-center">
        <CurrentStep
          onSubmitLogin={handleSubmitLogin}
          onSubmitPhoneLogin={handleSubmitPhoneLogin}
          onChangePhone={handleChangePhone}
          phone={phone}
          onChangePassword={e => setPassword(e.target.value)}
          password={password}
          onSubmitRegister={handleSubmitRegister}
          onBlurPhone={handleBlurPhone}
          onFocusPhone={handleFocusPhone}
          changeStep={setStep}
        />
      </div>
    </section>
  )
}

export default Login
