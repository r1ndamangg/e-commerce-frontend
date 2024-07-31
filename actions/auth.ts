"use server"

import { cookies } from "next/headers"

export const logout = () => {
  const cookiesStore = cookies()
  cookiesStore.delete("jwt")
  cookiesStore.delete("user")
}
