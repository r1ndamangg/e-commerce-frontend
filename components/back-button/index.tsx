import { ArrowLeftIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

interface Props {
  href: string
}

const BackButton = ({ href }: Props) => {
  return (
    <Link href={href}>
      <ArrowLeftIcon width={24} />
    </Link>
  )
}

export default BackButton
