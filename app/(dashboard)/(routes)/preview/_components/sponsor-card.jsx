export const SponsorsCard = () => {
    return (
        <div className="relative flex flex-col text-gray-700 px-5 py-4 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[20px] py-2 text-center font-semibold tracking-[-2%] leading-[29px] text-[#000] uppercase">
                Sponsor
            </h1>
            <div className="flex py-5 justify-between items-center w-full md:w-full lg:w-[450px]">
                <h3 className="text-[#101928] text-[13px] md:text-[16px] lg:text-[16px] leading-[23.2px] font-extrabold">
                    Sponsor&#8217;s Confirmation:
                </h3>
                <button className="text-[#fff] w-[221px] font-semibold leading-[20.3px] bg-[#107001] p-[6px] md:p-[12px] lg:p-[12px] rounded-[6px] border-1 border-[#DOD5DD] text-[12px] md:text-[14px] lg:text-[14px]">
                    View Sponsor&#8217;s confirmation
                </button>
            </div>
        </div>
    )
}