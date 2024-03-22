import Image from "next/image"
import styles from './provost.module.css'


export const ProvostSection = () => {
    return (
        <section className={styles.provost_container}>
            <div className={styles.provost_heading}>
                <h1>provost message</h1>
                <div className={styles.heading_line}></div>
            </div>
            <div className={styles.provost_content}>
                <div className={styles.provost_img_container}>
                    <Image
                        height={150}
                        width={250}
                        alt="Provost Image"
                        src="/images/provost-image.png"
                        className={styles.provost_image}
                    />
                    <div className={styles.green_card}></div>
                </div>
                <div className={styles.title_message}>
                    <h1>Prof. Dr. Bala Balarabe</h1>
                    <p>
                        The school is a health training institution that addresses the needs
                        and expectation of all student nurses, patients, staff, visitors and
                        the society at large in an academic environment that promotes teaching/learning
                        process and research in nursing. Professionally trained, disciplined and highly
                        motivated tutors provide training in a tactical and confident manner. We shall
                        continue to improve our training through continuing education, computer litracy,
                        research and linkages with other school of Nursing.
                    </p>
                </div>
            </div>
        </section>
    )
}