export const ExperienceCard = () => {
    return (
        <div className="relative flex flex-col text-gray-700 px-5 py-4 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[20px] py-2 text-center font-semibold tracking-[-2%] leading-[29px] text-[#000] uppercase">
                Work Experience
            </h1>
            <div className="max-w-screen-lg flex flex-col gap-4 w-full md:w-full lg:w-[450px]">
                <div className="flex flex-col pt-3 gap-[1.6rem]">
                    {/* Name */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full "
                        >

                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Name of Hospital/Clinic:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                BSN
                            </p>
                        </div>
                    </div>
                    {/* positions held */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Position(s) Held:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Ahmadu Bello University, Zaria
                            </p>
                        </div>
                    </div>

                    {/* Start Date */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Start Date:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                02/10/2022
                            </p>
                        </div>
                    </div>
                    {/* End Date */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                End Date:
                            </h2>

                            <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                02/10/2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}