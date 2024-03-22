import { Separator } from "@/components/ui/separator"

export const Details = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[16px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-2%] leading-7 text-[#000] ">
                Application Fee Payment Recceipt
            </h1>
            <p className="text-[#475367] py-1 leading-6 text-[14px] md:text-[16px] lg:text-[16px] font-normal">
                Let&#8217;s begin your admission process.
            </p>
            <div className="max-w-screen-lg flex flex-col gap-20 w-full md:full lg:w-80">
                <div className="flex flex-col pt-3 gap-[1.6rem]">
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Payer&#8217;s name:
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Adekunle Sukanmi
                            </p>
                        </div>
                    </div>
                    <Separator className="my-[1px]" />
                    {/* email details */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Payer&#8217;s Email:
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                Asukanmi@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Amount
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                N10,000 (Ten thousand naira)
                            </p>
                        </div>
                    </div>
                    <Separator className="my-[1px]" />
                    {/* Payment Date */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Transaction Date
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                11th February, 2024
                            </p>
                        </div>
                    </div>
                    <Separator className="my-[1px]" />
                    {/* Transaction ID */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Transaction ID
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                273363546
                            </p>
                        </div>
                    </div>
                    <Separator className="my-[1px]" />
                    {/* Transaction Reference */}
                    <div className="relative h-[20px] w-full min-w-[200px]">
                        <div
                            className="peer flex justify-between items-center h-full w-full"
                        >
                            <h2 className="text-[#101928] font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-[23.2px]">
                                Transaction Reference
                            </h2>

                            <p className="text-[#101928] font-semibold text-[12px] md:text-[14px] lg:text-[14px] leading-[23.2px]">
                                fiaoyiaeeweiey7rb
                            </p>
                        </div>
                    </div>
                    <Separator className="my-[1px]" />
                </div>
            </div>
        </div>
    )
}