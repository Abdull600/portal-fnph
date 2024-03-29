import { GiHamburgerMenu } from "react-icons/gi";

import { HeaderRoutes } from "./header-routes"
import { Logo } from "./logo"

import styles from './header.module.css'
import Link from "next/link";

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
        label: "About Us",
        href: "/about",
    },
    {
        label: "Programes",
        href: "/programes",
    },
    {
        label: "Contact",
        href: "/contact",
    }
]

export const HeaderItems = () => {
    const navs = navigation;
    return (
        <nav className="flex justify-between items-center shadow-gray-500 h-[58.9px] md:h-[100px] px-5 py-2 border-2 md:px-10 md:py-2">
            <div className={styles.logo_container}>
                <Logo />
            </div>
            <div className={styles.nav_container}>
                {navs.map((nav) => (
                    <HeaderRoutes
                        key={nav.href}
                        label={nav.label}
                        href={nav.href}
                    />
                ))}


                <Link
                    href="/portal"
                    className="text-[#107001] border-[1px] hover:bg-[#107001] hover:text-[#fff] hover:transition-all border-[#107001] text-[15px] md:text-[18px] font-semibold leading-6 rounded-[10px] px-6 py-1 md:px-10 md:py-2"
                >
                    Portal
                </Link>
                <div className="md:hidden lg:hidden">
                    <span>
                        <GiHamburgerMenu
                            size={35}
                            className="py-1"
                        />
                    </span>
                </div>
            </div>
        </nav>
    )
}