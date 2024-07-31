"use client"
import { FC } from "react"
import Header from "./lib/components/header"
import UserInfo from "./lib/components/user-info"
import ConsentForm from "./lib/components/consent-form"
import OrderHistory from "./lib/components/order-history"
import Delivery from "./lib/components/delivery"
import PaymentMethod from "./lib/components/payment-method"
import Logout from "./lib/components/logout"
import Image from "next/image"
import { Button } from "@/components/ui"
import { useRouter } from "next/navigation"
import { useClientSession } from "@/hooks/useSession/useClientSession"
import { useIsMounted } from "@/hooks/useIsMounted"

const Profile: FC = () => {
  const { user } = useClientSession()
  const router = useRouter()
  const isMounted = useIsMounted()
  const isAuthUser = !!user

  if (!isMounted) return false

  return (
    <div className="h-full">
      <Header title="Профиль" balance="5889" isAuthUser={!isAuthUser} />
      <section>
        {isAuthUser ? (
          <>
            <UserInfo
              name={`${user.firstName} ${user.lastName}`}
              phone={user.phoneNumber}
              email={user.email}
            />
            <ConsentForm />
            <OrderHistory />
            <Delivery address="Улица, дом, квартира" />
            <PaymentMethod cardNumber="Visa *1234" />
            <Logout />
          </>
        ) : (
          <div className="mt-12">
            <div className="text-center">
              <h2 className="font-bold">Вход в аккаунт не выполнен</h2>
              <p className="mt-1 text-sm text-[#8988A1]">
                Копите бонусы, сохраняйте адреса доставки и платежные данные в
                своем профиле
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <Image src="/images/user.png" alt="" width={206} height={206} />
              <Button
                variant="link"
                onClick={() => router.push("profile/login")}
                className="border-2 !border-[#3446ea] bg-transparent text-[#3446ea]"
              >
                Войти
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Profile
