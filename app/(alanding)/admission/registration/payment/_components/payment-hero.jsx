

import styles from "../_components/payment-hero.module.css";



export const PaymentHero = () => {
    return (
        <div className={`flex justify-between flex-col md:flex-col lg:flex-row px-[24px] py-[20px] md:p-[80px] lg:p-[100px] h-[400px] md:h-[386px] gap-1  ${styles.hero}`}>
        </div>
    )
}