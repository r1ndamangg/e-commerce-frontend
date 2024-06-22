import { FC } from "react"
import Header from "./lib/header"
import { Metadata } from "next"
import UserInfoForm from "./lib/user-info-form"

export const metadata: Metadata = {
  title: "Изминить профиль",
}

const EditUserInfo: FC = () => {
  return (
    <div className="h-full">
      <Header title="Изминить профиль" />
      <UserInfoForm />
    </div>
  )
}

export default EditUserInfo
