import { FiArrowDownCircle } from "react-icons/fi";
import styles from './faqs.module.css'

export const FaqsSection = () => {
    return (
        <section className={styles.faqs_container}>
            <div className={styles.faqs_heading}>
                <h1>frequently asked questions</h1>
                <div className={styles.heading_line}></div>
            </div>
            <ul className={styles.faqs_card_container}>
                <li className={styles.faqs_card}>
                    <div className={styles.question}>
                        <span>What is UX designs?</span>
                        <span>
                            <FiArrowDownCircle />
                        </span>
                    </div>
                    <div className={styles.answer}>
                        <span>
                            UX design stands for User Experience design.
                            It is the process of designing digital or physical
                            products that are easy to use, intuitive, and enjoyable
                            for the user.
                        </span>
                    </div>
                </li>
                <li className={styles.faqs_card}>
                    <div className={styles.question}>
                        <span>What are the key principles of UX design?</span>
                        <span>
                            <FiArrowDownCircle />
                        </span>
                    </div>
                    <div className={styles.answer}>
                        <span>
                            UX design stands for User Experience design.
                            It is the process of designing digital or physical
                            products that are easy to use, intuitive, and enjoyable
                            for the user.
                        </span>
                    </div>
                </li>
                <li className={styles.faqs_card}>
                    <div className={styles.question}>
                        <span>What is the difference between UX and UI design?</span>
                        <span>
                            <FiArrowDownCircle />
                        </span>
                    </div>
                    <div className={styles.answer}>
                        <span>
                            UX design stands for User Experience design.
                            It is the process of designing digital or physical
                            products that are easy to use, intuitive, and enjoyable
                            for the user.
                        </span>
                    </div>
                </li>
                <li className={styles.faqs_card}>
                    <div className={styles.question}>
                        <span>What is wireframe?</span>
                        <span>
                            <FiArrowDownCircle />
                        </span>
                    </div>
                    <div className={styles.answer}>
                        <span>
                            UX design stands for User Experience design.
                            It is the process of designing digital or physical
                            products that are easy to use, intuitive, and enjoyable
                            for the user.
                        </span>
                    </div>
                </li>
                <li className={styles.faqs_card}>
                    <div className={styles.question}>
                        <span>What is user testing?</span>
                        <span>
                            <FiArrowDownCircle />
                        </span>
                    </div>
                    <div className={styles.answer}>
                        <span>
                            UX design stands for User Experience design.
                            It is the process of designing digital or physical
                            products that are easy to use, intuitive, and enjoyable
                            for the user.
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    )
}