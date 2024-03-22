export const AlevelCert = () => {
    return (
        <div className="max-w-screen-lg flex flex-col gap-4 w-full md:w-full lg:w-full">
            <h3 className="text-[#101928] text-[15px] md:text-[18px] lg:text-[20px] leading-[29px] font-extrabold">
                A-Level Certificate
            </h3>
            <div className="flex flex-col pt-3 gap-[1.6rem]">
                {/*Cert type */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full "
                    >

                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Cert Type:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            BNS
                        </p>
                    </div>
                </div>
                {/* Awarding institute */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Awarding Institution:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            Ahmadu Bello University, Zaria
                        </p>
                    </div>
                </div>
                {/* Qualification obtained */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full "
                    >

                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Qualification Obtained:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            BSN Nursing
                        </p>
                    </div>
                </div>
                {/* Class of degree */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Class:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            First Class
                        </p>
                    </div>
                </div>
                {/* Date Started */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Date Started:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            11th February, 2024
                        </p>
                    </div>
                </div>
                {/* State of origin */}
                <div className="relative h-[20px] w-full min-w-[200px]">
                    <div
                        className="peer flex justify-between items-center h-full w-full"
                    >
                        <h2 className="text-[#101928] font-bold text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                            Date Obtained:
                        </h2>

                        <p className="text-[#101928] font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                            11th February, 2024
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-[#fff] w-[161px] text-center font-semibold leading-[20.3px] bg-[#107001] p-[6px] md:p-[12px] lg:p-[12px] rounded-[6px] text-[12px] md:text-[14px] lg:text-[14px]">
                    View O-Level Result
                </button>
            </div>
        </div>
    )
}