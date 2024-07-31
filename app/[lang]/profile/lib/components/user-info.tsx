import { FC } from "react"
import Link from "next/link"
import { formatPhoneNumber } from "@/lib/normalizers"

interface Props {
  name?: string
  phone: string
  email?: string
}

const UserInfo: FC<Props> = ({ name, phone, email }) => {
  return (
    <div className="mt-3 bg-white px-4 py-2">
      <h2 className="text-base font-bold">Контакты</h2>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <p className="text-xs font-medium text-[#6A6A81]">Имя Фамилия:</p>
          <p className="text-sm font-semibold">{name}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-[#6A6A81]">
            Контактный телефон:
          </p>
          <p className="text-sm font-semibold">{formatPhoneNumber(phone)}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-[#6A6A81]">Email:</p>
          <p className="text-sm font-semibold">{email || "Не заполнено"}</p>
        </div>
        <Link
          href="/profile/edit/info"
          className="self-end text-xs font-bold text-[#3345EA]"
        >
          Изменить
        </Link>
      </div>
    </div>
  )
}

export default UserInfo
