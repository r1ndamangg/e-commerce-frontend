import Cookies from "js-cookie"

export const useClientSession = () => {
  const userCookie = Cookies.get("user")

  let user: UserInfo | null = null

  if (userCookie) user = JSON.parse(userCookie)

  return {
    user,
  }
}
