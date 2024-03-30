"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { BankForm } from "./bank-form";
import { CardForm } from "./card-form";
import { TransferForm } from "./transfer-form";

const stepsArray = ['Card', 'Bank', 'Transfer'];

export const Checkout = ({ showSteps }) => {
    const [step, setStep] = useState('Card');

    const handleNextStep = () => {
        if (step === 'Card') setStep('Bank');
        if (step === 'Bank') setStep('Transfer');
    }


    const renderBreadcrumb = () => {
        if (!showSteps || step === 'Final') {
            return null;
        }
        return (
            <div className="relative z-0 w-full mb-5 group">
                <div className="flex items-center justify-start gap-4">
                    {stepsArray.map((item) => (
                        <div
                            className="flex items-center gap-1"
                            key={item}
                            onClick={() => setStep(item)}
                        >
                            <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="html">
                                <input name="type" type="radio"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-[#ACACAC] text-[#ACACAC] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#2FBD6A] before:opacity-0 before:transition-opacity checked:border-[#2FBD6A] checked:before:bg-[#2FBD6A] hover:before:opacity-10"
                                    checked={item === step} />
                                <span
                                    className="absolute text-[#2FBD6A] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </span>
                            </label>
                            <label className="mt-px font-medium text-[#ACACAC] cursor-pointer select-none" htmlFor="html">
                                {item}
                            </label>
                        </div>
                    ))}

                </div>
            </div>
        )
    }



    return (
        <div className="flex flex-col md:items-center md:justify-center px-5 py-3 md:p-0 bg-[#fff] rounded-[10px] md:h-[100vh] mt-[-300px] md:mx-[100px]">
            <div className="w-full md:max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group flex flex-col">
                    <h1 className="text-[18px] font-medium leading-5 md:text-[24px] md:leading-10 ">Payment</h1>
                    <Separator className="mb-4" />
                </div>
                <div className="relative z-0 w-full mb-5 group flex flex-col gap-3">
                    <h1 className="text-[12px] font-semibold leading-[12px] md:text-[18px]">Pay with:</h1>
                    {renderBreadcrumb()}

                    {step === 'Card' ? <CardForm /> : null}
                    {step === 'Bank' ? <BankForm /> : null}
                    {step === 'Transfer' ? <TransferForm /> : null}
                </div>
            </div>
            <div className="w-full md:max-w-md mx-auto">
                <p className="">
                    Your personal data will be used to process your order, support your experience
                    throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>
            <br />
            <br />
            <div className="w-full md:max-w-md mx-auto flex items-center gap-5">
                <button>Terms and conditions</button>
                <button>Privacy policy</button>
            </div>
        </div>
    )
}