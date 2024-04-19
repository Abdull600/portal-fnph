
import Image from "next/image"


export const HeaderLogo = () => {
    return (
        <div className="w-full h-[50px] md:h-[80px] grid justify-items-center grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4 w-full">
                <div className="flex h-[80px] items-center justify-center space-x-4 text-sm gap-1">
                    <Image
                        width={100}
                        height={100}
                        src="/logo.svg"
                        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                    />

                    <Image
                        width={50}
                        height={50}
                        src="/Divider.svg"
                        className="h-[60px] md:h-full"
                    />

                    <Image
                        width={100}
                        height={100}
                        src="/fnph-logo.svg"
                        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                    />
                </div>
            </div>
        </div>
    )
}