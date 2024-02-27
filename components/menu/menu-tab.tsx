import clsx from "clsx"
import Link from "next/link"

interface Props {
    href: string
    label: string
    icon: React.ReactNode
    selected?: boolean
}
export default function MenuTab({ label, icon, selected, href }: Props) {
    return (
        <li>
            <Link href={href}>
                <div
                    className={clsx(
                        {
                            "text-blue-900": selected,
                            "text-grey-400": !selected,
                        },
                        "flex flex-col items-center"
                    )}
                >
                    {icon}
                    <span>{label}</span>
                </div>
            </Link>
        </li>
    )
}
