import Image from "next/image"
import Link from "next/link"

export const DashboardLogo = () => {
    return (
        <Link href="/dashboard">
            <Image
                height={50}
                width={50}
                alt="logo"
                src="/logo.svg"
            />
        </Link>
    )
}