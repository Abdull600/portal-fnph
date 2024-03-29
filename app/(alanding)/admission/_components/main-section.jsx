"use client"

import { useState } from "react"
import { AboutUsSection } from "./aboutus-section";
import { Requirements } from "./requirements";





const stepsArray = ['About Us', 'Entry Requirement'];

export const MainSection = ({ showSteps }) => {
    const [step, setStep] = useState('About Us');

    const handleNextStep = () => {
        if (step === 'About Us') setStep('Entry Requirement');
    }





    const renderBreadcrumb = () => {
        if (!showSteps || step === 'Final') {
            return null;
        }
        return (
            <nav aria-label="breadcrumb" className="bg-[#F5F6FB] flex items-center justify-center gap-5 md:h-[100px] w-full px-[24px] py-5 md:px-[80px] lg:px-[100px] lg:py-[20px]">
                <ol class="flex items-center w-full">
                    {stepsArray.map((item) => (
                        <li
                            key={item}
                            className="flex items-center h-full font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer"
                            onClick={() => setStep(item)}
                        >
                            <div className={`text-[12px] md:text-[13px] h-full lg:text-[14px] font-medium ${item === step ? 'text-[#107001] border-b-2 border-[#107001]' : 'text-gray-900 opacity-60'}`}>
                                {item}
                            </div>
                            <span className="mx-2 font-sans text-[14px] antialiased font-medium leading-normal pointer-events-none select-none text-[#D0D5DD]"></span>
                        </li>
                    ))}
                </ol>
            </nav>
        )
    }

    return (
        <div>
            {renderBreadcrumb()}

            <div className="px-[24px] py-5 md:p-[80px] lg:p-[100px]">
                {step === 'About Us' ? <AboutUsSection /> : null}
                {step === 'Entry Requirement' ? <Requirements /> : null}
            </div>
        </div>
    )
}