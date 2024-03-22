"use client"

import { useEffect, useState } from "react"
import { BioData } from "./bio-data";
import { ContactDetails } from "./contact-details";
import { Education } from "./education";
import { Experience } from "./experience";
import { PersonalInfo } from "./personal-info";
import { Qualification } from "./qualification";


const formInputData = {
    DoB: '',
    phoneNumber: '',
    gender: '',
    maritalStatus: '',
    passportPhoto: '',
}

const stepsArray = ['Bio-Data', 'Contact Details',
    'Personal Information', 'Education', 'Professional Qualification',
    'Work Experience'];

export const FormSteps = ({ showSteps }) => {
    const [step, setStep] = useState('Bio-Data');
    const [formData, setFormData] = useState(formInputData)

    const handleNextStep = () => {
        if (step === 'Bio-Data') setStep('Contact Details')
        else if (step === 'Contact Details') setStep('Personal Information');
        else if (step === 'Personal Information') setStep('Education');
        else if (step === 'Education') setStep('Professional Qualification');
        else if (step === 'Professional Qualification') setStep('Work Experience');
    }

    const handleChangeInput = (event) => {
        const fieldName = event.target.name;
        let fieldValue;
        if (fieldName === "agreeToTerms") {
            fieldValue = event.target.checked;
        } else {
            fieldValue = event.target.value;
        }
        setFormData({
            ...formData,
            [fieldName]: fieldValue,
        });
    }

    const handleSubmit = () => {
        if (!formData.agreeToTerms) {
            alert('Error!!! You must agree to Terms of services!!!');
        } else {
            setStep('Final');
        }
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const renderBreadcrumb = () => {
        if (!showSteps || step === 'Final') {
            return null;
        }
        return (
            <nav aria-label="breadcrumb" className="w-full lg:w-max border-[#D0D5DD] border-t-2 border-b-2">
                <ol class="flex flex-wrap items-center w-full py-3 rounded-md bg-blue-gray-50 bg-opacity-60">
                    {stepsArray.map((item) => (
                        <li
                            key={item}
                            className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer"
                            onClick={() => setStep(item)}
                        >
                            <div className={`text-[12px] md:text-[13px] lg:text-[14px] font-medium ${item === step ? 'text-[#107001]' : 'text-gray-900 opacity-60'}`}>
                                {item}
                            </div>
                            <span className="mx-2 font-sans text-[14px] antialiased font-medium leading-normal pointer-events-none select-none text-[#D0D5DD]">/</span>
                        </li>
                    ))}
                </ol>
            </nav>
        )
    }

    return (
        <div className="p-5">
            {renderBreadcrumb()}

            <div className="py-2">
                {/* Forms */}
                {step === 'Bio-Data' ? <BioData /> : null}
                {step === 'Contact Details' ? <ContactDetails /> : null}
                {step === 'Personal Information' ? <PersonalInfo /> : null}
                {step === 'Education' ? <Education /> : null}
                {step === 'Professional Qualification' ? <Qualification /> : null}
                {step === 'Work Experience' ? <Experience /> : null}
            </div>
        </div>
    )
}