export const ApplicationDetails = () => {
    return (
        <div className="relative flex flex-col text-gray-700 px-5 py-4 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[20px] py-2 text-center font-semibold tracking-[-2%] leading-[29px] text-[#000] uppercase">
                Application Details
            </h1>
            <div className="max-w-screen-lg flex flex-col gap-4 w-full md:w-full lg:w-[450px]">
                <div className="flex flex-col pt-3 gap-[1.6rem]">
                    {/* Name */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full "
                        >

                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Name:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Adekunle Sukanmi
                            </p>
                        </div>
                    </div>
                    {/* Applied Program */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Applied Program:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Post-Basic Psychiatric Nursing
                            </p>
                        </div>
                    </div>

                    {/* Application Number */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Application Number:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                fnph/24A/1123
                            </p>
                        </div>
                    </div>
                    {/* Session */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Session:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                2024/2025
                            </p>
                        </div>
                    </div>
                    {/* Semester */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Semester
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                First
                            </p>
                        </div>
                    </div>

                    {/* Admission Status */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Admission Status:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Awaiting admission
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}