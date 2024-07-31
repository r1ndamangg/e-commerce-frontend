import { login } from "@/services/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const res = await login(body)

    if (res) {
      const response = NextResponse.json(
        { message: "user logged in" },
        { status: 200 }
      )
      response.cookies.set("user", JSON.stringify(res.user))
      response.cookies.set("jwt", res.jwt, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
      })
      return response
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 500 })
    }
    return NextResponse.json({ message: JSON.stringify(e) }, { status: 500 })
  }
}
