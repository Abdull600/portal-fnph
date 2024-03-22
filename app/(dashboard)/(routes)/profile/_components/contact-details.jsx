export const ContactDetails = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Contact Details
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal ">
                Let&#8217;s continue your admission process.
            </p>
            <form className="max-w-screen-lg w-full md:w-80 lg:w-80">
                <div className="flex flex-col gap-[1.7rem]">
                    {/* Postal address */}
                    <div className="relative h-[40px] w-full min-w-[200px]">
                        <label
                            htmlFor="postal-address"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Postal Address
                        </label>
                        <input type="text" name="postal-address"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Gender */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="permanent-address"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Permanent Address
                        </label>
                        <input type="text" name="permanent-address"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                </div>
                <button
                    className="mt-10 block w-full select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-sm hover:shadow-gray-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Save Contact Details
                </button>
            </form>
        </div>
    )
}