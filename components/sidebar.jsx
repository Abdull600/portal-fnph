import Link from "next/link"
import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

const navigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Admission",
        href: "/admission",
    },
    {
        label: "Contact",
        href: "/contact",
    }
]

export const Sidebar = () => {
    const sideRoutes = navigation;

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto w-full bg-white shadow-sm">
            <div className="px-5 pt-1">
                <Logo />
            </div>
            <div className="flex flex-col justify-center items-center pt-5 w-full">
                {sideRoutes.map((nav) => (
                    <SidebarRoutes
                        key={nav.href}
                        label={nav.label}
                        href={nav.href}
                    />
                ))}
            </div>
        </div>
    )
}