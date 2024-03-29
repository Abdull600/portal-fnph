"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';


export const HeaderRoutes = ({
    label,
    href,
}) => {
    const pathname = usePathname();


    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);



    return (
        <ul className="hidden md:flex lg:flex justify-center items-center gap-5">
            <li
            >
                <Link
                    href={href}
                    className="hover:text-[#107001] text-black font-medium text-[18px] leading-6"
                >
                    <span
                        className={(
                            isActive && "text-[#107001] border-t-2 border-[#107001] py-2"
                        )}
                    >
                        {label}
                    </span>
                </Link>
            </li>
        </ul >
    )
}