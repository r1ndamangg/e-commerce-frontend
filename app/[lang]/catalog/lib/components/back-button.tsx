"use client"
import { ArrowLeftIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"

const BackButton = () => {
  const pathname = usePathname()
  const splittedPathname = pathname.split("/")
  const backUrl = splittedPathname.slice(0, -1).join("/")

  return (
    <Link href={backUrl}>
      <ArrowLeftIcon width={24} />
    </Link>
  )
}

export default BackButton
