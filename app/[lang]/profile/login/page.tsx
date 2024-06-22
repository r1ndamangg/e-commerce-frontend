"use client"
import { FC, useState } from "react"
import { PhoneLogin } from "./lib/phone-login"
import { InputOtp } from "./lib/input-otp"

const Login: FC = () => {
  const [numberInput, setNumberInput] = useState(true)

  const handelClick = () => {
    setNumberInput(false)
  }

  return (
    <section className="h-full bg-[url('/images/login-bg.png')] bg-cover">
      <div className="flex h-full flex-col justify-center">
        {numberInput ? <PhoneLogin handelClick={handelClick} /> : <InputOtp />}
      </div>
    </section>
  )
}

export default Login
