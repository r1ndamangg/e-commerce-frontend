import { cookies } from "next/headers"

export const useServerSession = () => {
  const store = cookies()
  const userCookie = store.get("user")

  let user: UserInfo | null = null

  if (userCookie) user = JSON.parse(userCookie.value)

  return {
    user,
  }
}
