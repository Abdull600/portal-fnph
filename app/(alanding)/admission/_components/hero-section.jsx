"use client";

import Image from "next/image";
import styles from "../_components/hero-section.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";


export const HeroSection = () => {
    const router = useRouter();

    const handleClick = () => {
        alert('Going to Registration Page!!!');
        router.push('/admission/registration');
    }
    return (
        <div className={`flex justify-between flex-col md:flex-col lg:flex-row px-[24px] py-[20px] md:p-[80px] lg:p-[100px] h-[400px] md:h-[586px] gap-1  ${styles.hero}`}>
            <div className="flex flex-col Md:gap-10">
                <p className="text-[#fff] text-[14px] leading-[16px] md:text-[19px] underline md:no-underline font-normal md:leading-[32px] md:w-[300px]">
                    School of Post Basic Nursing, <br />
                    Federal Neuro Psychiatric Hospital,
                    Barnawa Kaduna
                </p>
                <h1 className="text-[#fff] font-normal text-[23px] leading-[48px] md:text-[57px] md:leading-[68px] capitalize">post basic nursing</h1>
                <br className="hidden md:flex " />
                <p className="text-[#fff] font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[26px] md:w-[550px]">
                    FNPH Kaduna Post Basic Nursing Admission
                    must be Registered Nurses. Evidence of Registration
                    with the Nursing and Midwifery Council of Nigeria (NMCN)
                    <br />
                    Current practising license issued by NMCN
                </p>
                <br className="hidden md:flex " />
                <br />
                <div className="flex md:flex-row items-center justify-start gap-5">
                    <div className="flex items-center">
                        <Image
                            height={20}
                            width={20}
                            src="/profile.svg"
                            alt="svg file"
                        />
                        <p className="text-[#fff] font-normal text-[14px] md:text-[16px] ">onsite learning</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            height={20}
                            width={20}
                            src="/calendar.svg"
                            alt="svg file"
                        />
                        <p className="text-[#fff] font-normal text-[14px] md:text-[16px] ">Duration: 18 months</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] md:self-end flex flex-col gap-3 justify-center items-center w-[250px] md:w-[250px] rounded-[9px] px-3 py-3 md:py-5">
                <div className="flex flex-col items-center w-full">
                    <div className="flex md:self-start items-center justify-between gap-3">
                        <Image
                            height={20}
                            width={20}
                            src="/moneys.svg"
                            alt="svg file"
                        />
                        <h5 className="text-[#1C1C1C] text-[16px] leading-[9.22px] md:text-[19px] font-normal md:leading-[23px] capitalize">form:</h5>
                        <h3 className="font-medium text-[16px] leading-[21.28px] md:text-[25px] md:leading-[13px] text-[#000]">#10,000</h3>
                    </div>
                    <Separator className="my-1 hidden md:flex" />
                </div>

                <button
                    onClick={handleClick}
                    className="bg-[#219653] text-[#fff] flex items-center justify-center gap-2 hover:gap-4 px-3 md:px-5 py-2 rounded-[9px] w-full"
                >
                    <span className="capitalize">
                        enrol now
                    </span>
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    )
}