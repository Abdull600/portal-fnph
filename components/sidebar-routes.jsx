"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';


export const SidebarRoutes = ({
    label,
    href,
}) => {
    const pathname = usePathname();


    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);



    return (
        <ul className="flex flex-col w-full justify-center items-center gap-5">
            <li
                className='px-6 py-2 flex flex-col justify-start items-center w-full'
            >
                <Link
                    href={href}
                    className="hover:text-[#107001] w-full text-black font-medium text-[18px] leading-6"
                >
                    {label}
                </Link>
            </li>
            <Separator className="w-full" />
        </ul >
    )
}