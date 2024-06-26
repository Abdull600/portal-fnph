import { FormSteps } from "./_components/formSteps";

export const metadata = {
    title: "Student Profile",
    description: "Generated by create next app",
};

export default function Profile() {
    return (
        <div className="bg-[#fff] md:rounded-[6px] lg:rounded-[6px] md:m-4 lg:m-4">
            <FormSteps showSteps={true} />
        </div>
    )
}