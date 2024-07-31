import { FC } from "react"
import { Menu } from "@/components/icons"

interface Props {
  title: string
  balance: string
  isAuthUser: boolean
}

const Header: FC<Props> = ({ title, balance, isAuthUser }) => {
  return (
    <header className="relative bg-white p-4 text-center">
      <div className="flex w-full items-center justify-between gap-4">
        <button>
          <Menu />
        </button>
        <h2>{title}</h2>
        {!isAuthUser && (
          <div className="flex items-center gap-3 rounded-lg bg-[#3345EA] p-2">
            <p className="text-xs text-white">{balance}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
