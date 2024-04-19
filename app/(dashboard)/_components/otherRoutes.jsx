import { SidebarLinks } from "./sidebar-links";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadsetThin } from "react-icons/pi";


const sideLinks = [
    {
        label: "Settings",
        icon: <IoSettingsOutline size={18} />,
        href: "/settings"
    },
    {
        label: "Help Center",
        icon: <PiHeadsetThin size={18} />,
        href: "/help"
    }
]

export const OtherRoutes = () => {
    const links = sideLinks;

    return (
        <div className="flex flex-col w-full p-4">
            {links.map((link) => (
                <SidebarLinks
                    key={link.href}
                    icon={link.icon}
                    label={link.label}
                    href={link.href}
                />
            ))}
        </div>
    )
}