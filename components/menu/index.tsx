"use client"

import MenuTab from "./menu-tab"
import {
    HomeIcon,
    RectangleGroupIcon,
    UserCircleIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()

    return (
        <footer className="bg-white absolute bottom-0 w-full px-4 py-2">
            <nav>
                <ul className="flex gap-2 justify-between">
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
        href: "/products",
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
