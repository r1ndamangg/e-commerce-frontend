export const apiURL = process.env.NEXT_PUBLIC_API_URL

export const handleError = (e: unknown) => {
  if (e instanceof Error) {
    throw new Error(e.message)
  }

  throw new Error(JSON.stringify(e))
}
