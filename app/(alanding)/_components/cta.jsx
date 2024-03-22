
import styles from './cta.module.css'

export const CallTOAction = () => {
    return (
        <section className={styles.cta_container}>
            <div className={styles.cta_heading}>
                <h1>join our college</h1>
            </div>
            <div className={styles.cta_content}>
                <p>
                    The school is a health training institution that addresses
                    the needs and expectation of all student nurses, patients, staff,
                    visitors and the society at large in an academic environment that
                    promotes teaching/learning process and research in nursing. Professionally
                    trained, disciplined and highly motivated tutors provide training in a tactical
                    and confident manner. We shall continue to improve our training through continuing
                    education, computer litracy, research and linkages with other school of Nursing.
                </p>
            </div>
            <div className={styles.cta}>
                <a className={styles.cta_btn}>register</a>
            </div>
        </section>
    )
}