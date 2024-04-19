import { GiHamburgerMenu } from "react-icons/gi"

export const Menu = () => {
    return (
        <div className="md:hidden lg:hidden">
            <span>
                <GiHamburgerMenu
                    size={35}
                    className="py-1 cursor-pointer"
                />
            </span>
        </div>
    )
}