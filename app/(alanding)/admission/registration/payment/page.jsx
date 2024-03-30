import { Checkout } from "./_components/checkout";
import { PaymentHero } from "./_components/payment-hero";

export default function Payment() {
    return (
        <div>
            <PaymentHero />
            <Checkout showSteps={true} />
        </div>
    )
}