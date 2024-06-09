import { ArrowLeftIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof Link>

const BackButton = (props: Props) => {
  return (
    <Link {...props}>
      <ArrowLeftIcon width={24} />
    </Link>
  )
}

export default BackButton
