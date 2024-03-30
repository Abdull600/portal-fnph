

import { GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { ImFileText2 } from "react-icons/im";
import { GoPeople } from "react-icons/go";

import { SidebarItem } from "./sidebar-items";

const guestRoutes = [
  {
    icon: <GrHomeRounded size={18} />,
    label: "Home",
    href: "/dashboard",
  },
  {
    icon: <CgProfile size={18} />,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: <GoPeople size={18} />,
    label: "Sponsor",
    href: "/sponsor",
  },
  {
    icon: <CiCreditCard1 size={18} />,
    label: "Payment",
    href: "/payment",
  },
  {
    icon: <ImFileText2 size={18} />,
    label: "Preview and Submit",
    href: "/preview",
  },
];


export const SidebarRoutes = () => {

  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full p-4">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
