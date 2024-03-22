export const PersonalInfo = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Personal Information
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal ">
                Let&#8217;s continue your admission process.
            </p>
            <form className="max-w-screen-lg w-full md:w-80 lg:w-80">
                <div className="flex flex-col gap-[1.7rem]">
                    {/* fullname */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="fullname"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Fullname
                        </label>
                        <input type="text" name="fullname"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Next of Kin */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="kin-name"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Name of Next of Kin
                        </label>
                        <input type="text" name="kin-name"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Next of Kin Address */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="kin-address"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Address of Next of Kin
                        </label>
                        <input type="text" name="kin-address"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* State */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="state"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            State
                        </label>
                        <input type="text" name="state"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* LGA */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="lga"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Local Government
                        </label>
                        <input type="text" name="lga"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Town */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="town"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Town
                        </label>
                        <input type="text" name="town"
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