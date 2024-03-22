import { LuUploadCloud } from "react-icons/lu";

export const Education = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                General Education
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal ">
                Let’s continue your admission process.
            </p>
            <form className="max-w-screen-lg flex flex-col gap-20 w-full md:w-80 lg:w-80">
                {/* O Level Results */}
                <div className="relative h-[70px] w-full min-w-[200px]">
                    <h1 className="text-[14px] md:text-[16px] lg:text-[16px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                        O-Level Results
                    </h1>
                    <label
                        htmlFor="status"
                        className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                    >
                        Upload your O-Level Result
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
                    <div className="border-b-2 mt-4 border-[#F0F2F5] h-[1px] w-full">
                        <h1 className="text-[14px] md:text-[16px] lg:text-[16px] w-full font-semibold tracking-[-2%] leading-7 text-[#000] ">
                            A-Level Certificate
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col pt-3 gap-[1.6rem]">
                    {/* Cert type */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="date"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Name/Certificate type
                        </label>
                        <input
                            type="date"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-2 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Awarding institution */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="institution"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Awarding Institution
                        </label>
                        <input type="text" name="institution"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Qualification Obtained */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="q-obtained"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Qualification Obtained
                        </label>
                        <input type="text" name="q-obtained"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Gender */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="cert-class"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Certificate Class
                        </label>
                        <select
                            name="cert-class"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-2 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value=""></option>
                            <option value="first-class">First Class</option>
                            <option value="second-class-upper">Second Class Upper</option>
                            <option value="second-class-lower">Second Class Lower</option>
                        </select>
                    </div>
                    {/* Date Obtained */}
                    <div className="relative h-[36px] w-full min-w-[200px]">
                        <label
                            htmlFor="date-obtained"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Date Obtained
                        </label>
                        <input type="date" name="date-obtained"
                            className="peer h-full w-full rounded-[6px] border border-[#D0D5DD]  bg-transparent px-3 py-1 font-sans text-sm font-normal text-[#000] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    {/* Upload Certificate */}
                    <div className="relative h-[70px] w-full min-w-[200px]">
                        <label
                            htmlFor="status"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Upload Certificate
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
                    <button
                        className="block w-full mt-3 select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-sm hover:shadow-gray-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Save Academic Qualification
                    </button>
                </div>
            </form>
        </div>
    )
}