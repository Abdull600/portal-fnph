import { GiHamburgerMenu } from "react-icons/gi";

import { HeaderRoutes } from "./header-routes"
import { Logo } from "./logo"

import styles from './header.module.css'

const visitorRoutes = [
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
    const routes = visitorRoutes;
    return (
        <nav className={styles.navbar}>
            <div class={styles.logo_container}>
            <Logo />
            </div>
            <div class={styles.nav_container}>
                {routes.map((route) => (
                    <HeaderRoutes 
                        key={route.href}
                        label={route.label}
                    />
                ))}
            </div>
            <div class={styles.utils}>
                <div class={styles.portal_btn}>
                    <a href="">Portal</a>
                </div>
                <div class={styles.menu_container}>
                    <span>
                        <GiHamburgerMenu />
                    </span>
                </div>
            </div>
        </nav>
    )
}