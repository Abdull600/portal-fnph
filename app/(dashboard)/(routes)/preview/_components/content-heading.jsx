import Image from "next/image"


export const PreviewHeading = () => {
    return (
        <div className="relative flex justify-between items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <Image
                height={50}
                width={50}
                src="./logo.svg"
                className="md:hidden lg:hidden"
                alt="fnph logo"
            />

            <Image
                height={150}
                width={150}
                src="./logo.svg"
                className="hidden md:hidden lg:flex"
                alt="fnph logo"
            />

            <Image
                height={100}
                width={100}
                src="./logo.svg"
                className="hidden md:flex lg:hidden"
                alt="fnph logo"
            />

            <div className="flex flex-col items-center text-[13px] md:text-[14px] lg:text-[20px] justify-center font-semibold md:font-bold lg:font-bold uppercase">
                <h2 className="leading-[29px]">
                    SCHOOL OF PSYCHIATRIC NURSING
                </h2>
                <h2 className="leading-[29px]">
                    FEDERAL NEURO-PSYCHIATRIC HOSPITAL, KADUNA
                </h2>
                <h2 className="leading-[29px]">
                    PMB. 2187, KADUNA
                </h2>
                <h2 className="leading-[29px]">
                    APPLICATION FORM
                </h2>
                <h2 className="leading-[29px]">
                    POST-BASIC PSYCHIATRIC NURSING (18 MONTHS)
                </h2>
            </div>

            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-[#D7D7D7]">

            </div>
        </div>
    )
}