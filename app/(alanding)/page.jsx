import { CallTOAction } from "./_components/cta";
import { FaqsSection } from "./_components/faqs";
import { HeroSection } from "./_components/hero";
import { NewsSection } from "./_components/news";
import { ProvostSection } from "./_components/provost";
import { Steps } from "./_components/steps";




export default function Home() {
  return (
    <div>
      <HeroSection />
      <CallTOAction />
      <Steps />
      <ProvostSection />
      <NewsSection />
      <FaqsSection />
    </div>
  );
}
