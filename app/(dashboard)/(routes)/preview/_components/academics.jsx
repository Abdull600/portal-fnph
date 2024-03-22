import { AlevelCert } from "./alevel-cert"
import { ProfessionalCert } from "./prof-cert"

export const Academics = () => {
    return (
        <div className="relative flex flex-col text-gray-700 px-5 py-4 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[20px] py-2 text-center font-semibold tracking-[-2%] leading-[29px] text-[#000] uppercase">
                Academics
            </h1>
            <div className="flex justify-between items-center w-full md:w-full lg:w-80 sm:w-[24.5rem]">
                <h3 className="text-[#101928] text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px] font-extrabold">
                    O-Level Result:
                </h3>
                <button className="text-[#fff] font-semibold leading-[20.3px] bg-[#107001] p-[6px] md:p-[12px] lg:p-[12px] rounded-[6px] border-1 text-[12px] md:text-[14px] lg:text-[14px]">
                    View O-Level Result
                </button>
            </div>
            <div className="flex py-4 flex-col lg:gap-5 md:flex-col lg:flex-row justify-between md:gap-5 lg:items-start">
                <AlevelCert />
                <ProfessionalCert />
            </div>
        </div>
    )
}