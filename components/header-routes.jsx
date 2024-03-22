"use client";

import { usePathname, useRouter } from "next/navigation";

import styles from './header.module.css'

export const HeaderRoutes = ({label, href}) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
    (pathname === "/" && href === "/") || 
    pathname === href || 
    pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }
    return (
        <ul class={styles.nav}>
            <li class={styles.nav_item}>
                <a 
                    onClick={onClick}
                    className={(
                        `${styles.link}`, isActive && `${styles.active-link}`)}
                    >
                    {label}
                </a>
            </li>
        </ul>
    )
}