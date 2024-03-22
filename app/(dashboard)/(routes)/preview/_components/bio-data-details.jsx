import { LeftBiodata } from "./left-biodata"
import { RightBiodata } from "./right-biodata"

export const BiodataDetails = () => {
    return (
        <div className="relative flex flex-col text-gray-700 px-5 py-4 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="text-[15px] md:text-[18px] lg:text-[20px] py-2 text-center font-semibold tracking-[-2%] leading-[29px] text-[#000] uppercase">
                Bio-Data
            </h1>
            <div className="flex flex-col md:flex-col lg:flex-row lg:gap-5 justify-between items-center">
                <LeftBiodata />
                <RightBiodata />
            </div>
        </div>
    )
}