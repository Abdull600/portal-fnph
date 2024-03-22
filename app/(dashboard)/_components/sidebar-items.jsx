import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";



export const SidebarItem = ({
  icon,
  label,
  href,
}) => {
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
    <button
      onClick={onClick}
      type="button"
      className={(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-[#101928] rounded-[5px] bg-[#DFECDD] hover:bg-[#DFECDD]"
      )}
    >
      <div className="flex items-center gap-x-2 py-[10px] px-4">
        <span
          className={(
            "text-slate-500 size-6",
            isActive && "text-sky-700"
          )}
        >
        {icon}
        </span>
        {label}
      </div>
      <div
        className={(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}
