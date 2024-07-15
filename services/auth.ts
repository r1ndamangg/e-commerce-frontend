import { apiURL, handleError } from "./config"

const serviceURL = `${apiURL}/auth`

interface RegisterRequestBody {
  phone: string
  password: string
}

interface LoginReguestBody {
  identifier: string
  password: string
}

type UserStatus = "REGISTERED" | "NOT_REGISTERED"

export const getUserStatus = async (phone: string) => {
  try {
    const result = await fetch(`${serviceURL}/get-user-status?phone=${phone}`)
    const json = await result.json()

    return json.status as UserStatus
  } catch (e) {
    handleError(e)
  }
}

type VerificationStatus =
  | "pending"
  | "approved"
  | "canceled"
  | "max_attempts_reached"
  | "deleted"
  | "failed"
  | "expired"

export const sendOTP = async (phone: string) => {
  try {
    const result = await fetch(`${serviceURL}/send-otp`, {
      method: "POST",
      body: JSON.stringify({ phone }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await result.json()

    return json.status as VerificationStatus
  } catch (e) {
    handleError(e)
  }
}

export const verifyOTP = async (body: { code: string; phone: string }) => {
  const result = await fetch(`${serviceURL}/verify-otp`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const json = await result.json()

  return json.status as VerificationStatus
}

export const register = async (body: RegisterRequestBody) => {
  try {
    const result = await fetch(`${serviceURL}/register`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await result.json()

    return json.data
  } catch (e) {
    handleError(e)
  }
}

export const login = async (body: LoginReguestBody) => {
  try {
    const result = await fetch(`${serviceURL}/local`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (e) {
    handleError(e)
  }
}
