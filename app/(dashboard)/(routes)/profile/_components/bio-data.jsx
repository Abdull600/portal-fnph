import { LuUploadCloud } from "react-icons/lu";

export const BioData = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Bio-Data Form
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal ">
                Let&#8217;s continue your admission process.
            </p>
            <form className="max-w-screen-lg w-full md:w-80 lg:w-80">
                <div className="flex flex-col gap-[1.7rem]">
                    {/* Date of birth */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="dob"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Enter your date of birth
                        </label>
                        <input
                            type="date" name="dob"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* phone number */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="phone-number"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Enter your phone number
                        </label>
                        <input type="text" name="phone-number"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Gender */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="gender"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Select your gender
                        </label>
                        <select
                            name="gender"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    {/* Marital Status */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="status"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Select your marital status
                        </label>
                        <select
                            name="status"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value=""></option>
                            <option value="married">Married</option>
                            <option value="single">Single</option>
                            <option value="divorced">Divorced</option>
                        </select>
                    </div>
                    {/* Upload passport Photo */}
                    <div className="relative h-[70px] w-full min-w-[200px]">
                        <label
                            htmlFor="status"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Upload Passport Photo
                        </label>
                        <div
                            className="peer flex justify-between items-center h-full w-full rounded-[6px] border-dotted border-2 border-[#D0D5DD]  bg-transparent px-5 py-2 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <div className="flex items-center gap-2">
                                <div className="bg-[#F9FAFB] flex items-center justify-center p-3 rounded-[50%] h-[42px] w-[42px] ">
                                    <LuUploadCloud size={25} />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[#101928] leading-[20.3px] font-medium text-[12px] md:text-[14px] lg:text-[14px]">Tap to Upload</h2>
                                    <p className="text-[#98A2B3] text-[11px] leading-[15.95px] font-normal">PNG, JPG | 100KB max.</p>
                                </div>
                            </div>

                            <button className="bg-[#F0F2F5] border-1 border-[#D0D5DD] text-[12px] md:text-[14px] lg:text-[14px] text-[#344054] font-semibold leading-[20.3px] rounded-[6px] w-[89px] px-[12px] py-[8px]">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="mt-10 block w-full select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-sm hover:shadow-gray-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Save Bio-Data Form
                </button>
            </form>
        </div>

    )
}