export const LeftBiodata = () => {
    return (
        <div className="max-w-screen-lg flex flex-col gap-4 w-full md:w-full lg:w-full">
            <div className="flex flex-col pt-3 gap-[1.6rem]">
                {/*Gender */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full "
                    >

                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Gender:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Male
                        </p>
                    </div>
                </div>
                {/* Marital status */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full "
                    >

                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Marital Status:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Married
                        </p>
                    </div>
                </div>
                {/* DOB */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Date of birth:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            11th February, 2024
                        </p>
                    </div>
                </div>

                {/* Email address */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Email:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Asukanmi@gmail.com
                        </p>
                    </div>
                </div>
                {/* Nationality */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Nationality:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Nigerian
                        </p>
                    </div>
                </div>

                {/* State of origin */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            State of Origin:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Kaduna
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}