

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FiEyeOff } from "react-icons/fi";

export default function Auth() {


    return (
        <div className="flex flex-col gap-2 flex-start items-center justify-center pt-[10px] w-full mx-1 md:mx-0 mt-5 md:mt-0 md:w-0">
            <div className="bg-[#fff] w-full md:w-[488px] md:h-[335px] rounded-[15px] border-[1.5px] border-[#D0D5DD] px-5 py-5">
                <form>
                    <div className="w-full mx-auto py-1">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm md:text-[14px] font-medium text-[#101928] capitalize">username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <CiMail
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                />
                            </div>
                            <input type="text" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Email / Matric Number" />
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
                            <input type="password" className="bg-[#FFFFFF] border-[1px] border-[#D0D5DD] placeholder-[#98A2B3] text-[#101928] text-sm rounded-[6px] focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-2.5 p-2.5" placeholder="Enter Password" />
                        </div>
                    </div>
                    {/* checkbox */}
                    <div className="w-full mx-auto py-2">
                        <div className="relative">
                            <div className="absolute inset-y-1 end-0 flex items-center pe-0">
                                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><Link href="#" className="text-[#107001] text-[12px] md:text-[14px] leading-[20.3px] underline">Forgot Your Password?</Link></label>
                            </div>
                            <label htmlFor="" className="flex items-center text-[14px] font-medium text-[#101928] leading-[20.3px] gap-2">
                                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#107001] bg-[#107001] border-[#107001] rounded focus:ring-blue-500 focus:ring-2 ps-2.5 p-2.5" />
                                Remember me
                            </label>
                        </div>
                    </div>
                    {/* submit button */}
                    <div className="w-full mx-auto py-4">
                        <button
                            className="bg-[#107001] text-[#ffffff] w-full rounded-[6px] px-[16px] md:px-[24px] py-2.5 text-[14px] md:text-[16px] font-semibold leading-[23.3px]"
                            type="submit"
                        >
                            <Link href="/dashboard">
                                Log in (For users and returning applicants)
                            </Link>
                        </button>
                    </div>
                    {/* signup btn */}
                    <div className="w-full mx-auto py-1">
                        <div className="flex items-center justify-center">
                            <div className="ms-2 text-[14px] font-medium text-[#101928] leading-[20.3px]">
                                Are you a new Applicant?     <Link href="/sign-up" className="text-[#107001] text-[14px] font-bold leading-[20.3px] cursor-pointer capitalize hover:underline">Create Account</Link>.
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
