"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react";
import { LuPlus } from "react-icons/lu"

export const Experience = () => {
    const [isFormFilled, setIsFormFilled] = useState(false); // State to track form completion

    const handleInputChange = (event) => {
        const allFieldsFilled = [...event.target.form.elements] // Get all form elements
            .filter((element) => element.tagName !== "BUTTON") // Exclude buttons
            .every((element) => element.value.trim() !== ""); // Check if all have values

        setIsFormFilled(allFieldsFilled);
    };
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Work Experience
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal ">
                Let&#8217;s continue your admission process.
            </p>
            <form className="max-w-screen-lg flex flex-col gap-20 w-full md:w-80 lg:w-80">
                <div className="flex flex-col pt-3 gap-[1.7rem]">
                    {/* Cert type */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="hospital-name"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Name of Hospital/Clinic
                        </label>
                        <input
                            type="text" name="hospital-name"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-2 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Awarding institution */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="position-held"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Position(s) Held
                        </label>
                        <input type="text" name="position-held"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* State Date */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="state-date"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Start Date
                        </label>
                        <input type="date" name="start-date"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* End date */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="end-date"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            End Date
                        </label>
                        <input type="date" name="end-date"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Add Work Experience */}
                    <div className="relative h-[40px] w-full min-w-[200px] mt-2">
                        <Button
                            className="peer flex gap-2 justify-center items-center h-full w-full rounded-[6px] bg-[#F0F2F5] border-2 border-[#D0D5DD]  px-5 py-2 font-sans text-sm font-normal text-[#000] outline outline-0"
                        >
                            <span className="text-[#344054] text-[14px] md:text-[16px] lg:text-[16px] font-semibold leading-[23.2px] ">
                                Add Work Experience
                            </span>
                            <LuPlus />
                        </Button>
                    </div>
                    <button
                        className="block w-full mb-3 select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white  transition-all"
                        type="button">
                        Save Work Experience
                    </button>
                </div>
            </form>
        </div>
    )
}