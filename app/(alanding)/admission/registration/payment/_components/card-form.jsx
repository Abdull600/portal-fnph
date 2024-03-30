"use client";

import { useRouter } from "next/navigation"

export const CardForm = () => {
    const router = useRouter();

    const handleSubmit = () => {
        alert("Payment successful!!!");
        router.push('/success');
    }
    return (
        <form>
            <div className="z-0 w-full mb-5 group">
                <label
                    htmlFor="card-number"
                    className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                >
                    Card Number
                </label>
                <input type="text" name="card"
                    className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="z-0 w-full mb-5 group">
                    <label
                        htmlFor="expiration-date"
                        className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                    >
                        Expiration Date
                    </label>
                    <input
                        type="text"
                        name="expiration-date"
                        placeholder="MM/YY"
                        className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                </div>
                <div className="z-0 w-full mb-5 group">
                    <label
                        htmlFor="cvv"
                        className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                    >
                        Cvv
                    </label>
                    <input
                        type="text"
                        name="cv"
                        placeholder="123"
                        className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                </div>
            </div>
            <br />
            <div className="flex items-center gap-2 z-0 w-full mb-5 group">
                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#2FBD6A] checked:bg-[#2FBD6A] checked:before:bg-[#2FBD6A] hover:before:opacity-10"
                        id="check" />
                    <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </label>
                <label className="font-mdeium text-gray-700 cursor-pointer select-none" htmlFor="check">
                    Save card details
                </label>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-[#219653] focus:ring-4 focus:outline-none font-medium rounded-[6px] text-sm w-full px-5 py-2.5 text-center uppercase"
            >
                Pay ngn10,000
            </button>
        </form>
    )
}