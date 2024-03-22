import { IoMdArrowForward } from "react-icons/io";

import Image from 'next/image'
import styles from './steps.module.css'

export const Steps = () => {
    return (
        <section className={styles.steps_container}>
            <div className={styles.steps_bg}>
                <div className={styles.steps_items}>
                    {/* check Admission */}
                    <div className={styles.card}>
                        <div className={styles.card_icon}>
                            <Image
                                height={50}
                                width={50}
                                alt="Check admission"
                                src="/check.svg"
                            />
                        </div>
                        <div className={styles.card_content}>
                            <h1>check admission</h1>
                            <p>
                                Check admission list to confirm
                                if you have been offered
                            </p>
                            <div className={styles.link_content}>
                                <a href="">
                                    get started
                                    <IoMdArrowForward />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Apply */}
                    <div className={styles.card}>
                        <div className={styles.card_icon}>
                            <Image
                                height={50}
                                width={50}
                                alt="Apply admission"
                                src="/apply.svg"
                            />
                        </div>
                        <div className={styles.card_content}>
                            <h1>apply</h1>
                            <p>
                                Apply to our post-basic programme and kickstart your study with us.
                            </p>
                            <div className={styles.link_content}>
                                <a href="#">
                                    get started
                                    <IoMdArrowForward />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Tour */}
                    <div className={styles.card}>
                        <div className={styles.card_icon}>
                            <Image
                                height={50}
                                width={50}
                                alt="Tour"
                                src="/tour.svg"
                            />
                        </div>
                        <div className={styles.card_content}>
                            <h1>book a tour</h1>
                            <p>
                                Book a tour of our school and get
                                acquainted with how we run.
                            </p>
                            <div className={styles.link_content}>
                                <a href="">
                                    get started
                                    <IoMdArrowForward />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}