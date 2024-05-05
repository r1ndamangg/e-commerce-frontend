"use client"
import BackButton from "@/components/back-button"
import { usePathname } from "next/navigation"

const BackLink = () => {
  const pathname = usePathname()
  const splittedPathname = pathname.split("/")
  const backUrl = splittedPathname.slice(0, -1).join("/")

  return <BackButton href={backUrl} />
}

export default BackLink
