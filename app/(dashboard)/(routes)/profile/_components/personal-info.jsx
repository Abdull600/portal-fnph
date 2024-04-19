import { BioData } from "./bio-data"
import { ContactDetails } from "./contact-details"
import { PersonalInfos } from "./personal-infos"

export const PersonalInfo = () => {
    return (
        <form>
            <BioData />
            <br />
            <br />
            <ContactDetails />
            <br />
            <br />
            <PersonalInfos />
            <button
                className="mt-10 block w-full md:w-80 lg:w-80 select-none rounded-[6px] bg-[#D0D5DD] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-sm hover:shadow-gray-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Save Applicant Information
            </button>
        </form>
    )
}