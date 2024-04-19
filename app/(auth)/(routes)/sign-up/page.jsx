"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FiEyeOff } from "react-icons/fi";


export default function Auth() {
    const route = useRouter();

    const handleClick = () => {
        alert("Registration successful... to Dashboad");
        route.push("/dashboard");
    }


    return (
        <div className="flex flex-col gap-2 flex-start items-center justify-center pt-[10px] w-full mx-10 md:mx-0 md:w-0">
            <div className="bg-[#FF0006]/[8%] w-full md:w-[488px] h-[54px] rounded-[15px] border-[1.5px] border-[#FCC2C2] px-2 py-1">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-0 pointer-events-none">
                        <Image
                            width={25}
                            height={25}
                            src="/warning.svg"
                        />
                    </div>

                    <p className="text-[#101928] text-[14px] rounded-[6px] block w-full ps-10">
                        You are required to create an account and verify your email, then login to complete the application process.
                    </p>
                </div>
            </div>
            <div className="bg-[#fff] w-full md:w-[488px] md:h-[450px] h-[440px] rounded-[15px] border-[1.5px] border-[#D0D5DD] px-5 py-5">
                <form>
                    <div className="w-full mx-auto py-1">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm md:text-[14px] font-medium text-[#101928] capitalize">fullname</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">

                            </div>
                            <input type="text" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Name" />
                        </div>
                    </div>
                    {/* email */}
                    <div className="w-full mx-auto py-1">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm md:text-[14px] font-medium text-[#101928] capitalize">email address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <CiMail
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                />
                            </div>
                            <input type="text" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Email" />
                        </div>
                    </div>
                    {/* password */}
                    <div className="w-full mx-auto py-1">
                        <label htmlFor="password" className="block mb-2 text-sm md:text-[14px] font-medium text-[#101928] capitalize">password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <FiEyeOff
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                />
                            </div>
                            <input type="pasword" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Pasword" />
                        </div>
                    </div>
                    {/* repeat password */}
                    <div className="w-full mx-auto py-1">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm md:text-[14px] font-medium text-[#101928] capitalize">confirm password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <FiEyeOff
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                />
                            </div>
                            <input type="text" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Password" />
                        </div>
                    </div>
                    {/* submit button */}
                    <div className="w-full mx-auto py-2 md:py-4">
                        <button
                            onClick={handleClick}
                            className="bg-[#107001] text-[#ffffff] w-full rounded-[6px] px-[24px] py-2.5 text-[14px] md:text-[16px] font-semibold leading-[23.3px]"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </div>
                    {/* signup btn */}
                    <div className="w-full mx-auto py-1">
                        <div className="flex items-center justify-center">
                            <label htmlFor="link-checkbox" className="ms-2 text-[14px] font-medium text-[#101928] leading-[20.3px]">Already have an account?      <Link href="/" className="text-[#107001] text-[12px] md:text-[14px] font-bold leading-[20.3px] capitalize hover:underline">Back to log in page</Link>.</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}