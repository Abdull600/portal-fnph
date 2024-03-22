import { LuUploadCloud } from "react-icons/lu"

export const Form = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Sponsor
            </h1>
            <p className="text-[#475367] w-[400px] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal">
                You are expected to print out this form and re-upload a filled version of
                it from your sponsor(s) for confirmation
            </p>
            <form className="max-w-screen-lg flex flex-col gap-20 w-full md:w-80 lg:w-80">
                <div className="flex flex-col pt-3 gap-[1.6rem]">
                    <div className="relative h-[70px] w-full min-w-[200px]">
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
                    {/* O Level Results */}
                    <div className="relative h-[70px] w-full min-w-[200px]">
                        <h1 className="text-[14px] md:text-[16px] lg:text-[16px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                            Sponsor&#8217;s Confirmation
                        </h1>
                        <label
                            htmlFor="status"
                            className="block font-sans py-1 text-[12px] md:text-[14px] lg:text-[14px] antialiased font-medium leading-[20.3px] text-[#101928]"
                        >
                            Upload your sponsor&#8217;s filled form
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
                    className="block w-full mt-3 select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-sm hover:shadow-gray-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Save Academic Qualification
                </button>
            </form>
        </div>
    )
}