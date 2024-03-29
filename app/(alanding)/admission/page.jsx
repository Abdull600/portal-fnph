import { HeroSection } from "./_components/hero-section";
import { MainSection } from "./_components/main-section";


export default function Admission() {
    return (
        <div>
            <HeroSection />
            <MainSection showSteps={true} />
        </div>
    )
}