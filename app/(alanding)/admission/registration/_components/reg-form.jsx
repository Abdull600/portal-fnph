"use client";

import { useRouter } from "next/navigation";

export const RegForm = () => {
    const router = useRouter();

    const handleSubmit = () => {
        alert('Going to make payment!!!');
        router.push('/admission/registration/payment')
    }
    return (
        <div className="flex flex-col md:items-center md:justify-center p-5 md:p-0 bg-[#fff] rounded-[10px] md:h-[150vh] mt-[-300px] md:mx-[100px]">
            <form className="w-full md:max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <h1 className="text-[18px] font-medium leading-5 md:text-[24px] md:leading-10 ">Application form</h1>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Full name</label>
                </div>
                {/* email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Email address</label>
                </div>
                {/* Address */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Address</label>
                </div>
                {/* age */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="date" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Date of Birth</label>
                </div>
                {/* Gender */}
                <div className="grid grid-cols-2 gap-4 md:flex md:flex-col">
                    <div className="relative z-0 w-full mb-5 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Gender</label>
                    </div>
                    {/* Marital status */}
                    <div className="relative z-0 w-full mb-5 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Marrital Status</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                        </select>
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Marital Status</label>
                    </div>
                </div>
                {/* Name of next of kin */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Name of Next of Kin</label>
                </div>
                {/* Address of next of kin */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Address of Next of Kin</label>
                </div>
                {/* phone and country */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Country</option>
                            <option>Nigeria</option>
                            <option>Niger</option>
                            <option>Ghana</option>
                        </select>
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Country</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="+234" required />
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Phone #</label>
                    </div>
                </div>
                {/* State and LGA*/}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>State</option>
                            <option>Kaduna</option>
                            <option>Niger</option>
                            <option>Ghana</option>
                        </select>
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">State</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>LGA</option>
                            <option>Zaria</option>
                            <option>Niger</option>
                            <option>Ghana</option>
                        </select>
                        <label for="floating_email" className="peer-focus:font-medium bg-[#fff] absolute text-sm text-gray-500 dark:text-gray-400 px-1 duration-300 transform -translate-y-6 scale-75 top-[15px] left-4 z-10 origin-[0]">Phone #</label>
                    </div>
                </div>
                {/* Proceed to payment button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-[#219653] focus:ring-4 focus:outline-none font-medium rounded-[6px] text-sm w-full px-5 py-2.5 text-center uppercase"
                >
                    proceed to payment
                </button>
            </form>

        </div>
    )
}