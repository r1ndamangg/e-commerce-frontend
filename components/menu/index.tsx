"use client"

import MenuTab from "./menu-tab"
import {
  HomeIcon,
  RectangleGroupIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

const Menu: React.FC = () => {
  const pathname = usePathname()

  return (
    <footer className="sticky bottom-0 w-full bg-white px-4 py-2">
      <nav>
        <ul className="flex justify-between gap-2">
          {menuItems.map(item => (
            <MenuTab
              key={item.name}
              {...item}
              selected={item.href === pathname}
            />
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Menu

const menuItems = [
  {
    icon: <HomeIcon width={24} />,
    name: "home",
    href: "/",
    label: "Главная",
  },
  {
    icon: <RectangleGroupIcon width={24} />,
    name: "products",
    href: "/catalog",
    label: "Каталог",
  },
  {
    icon: <ShoppingCartIcon width={24} />,
    name: "shopping-cart",
    href: "/cart",
    label: "Корзина",
  },
  {
    icon: <UserCircleIcon width={24} />,
    name: "profile",
    href: "/profile",
    label: "Профиль",
  },
]
