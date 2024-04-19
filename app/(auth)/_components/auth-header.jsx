import { TiArrowLeft } from "react-icons/ti";
import Link from "next/link"

export const AuthHeader = () => {
    return (
        <div className="h-[30px] md:h-[50px] flex items-center justify-start px-5">
            <div className="justify-items-start">
                <Link href="#" className="flex justify-center items-center ">
                    <TiArrowLeft size={25} />
                    <span className="capitalize text-[14px] md:text-[16px] font-medium leading-[23.2px] text-[#000]">go back</span>
                </Link>
            </div>
        </div>
    )
}