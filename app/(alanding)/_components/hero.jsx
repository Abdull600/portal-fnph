
import styles from './hero.module.css'

export const HeroSection = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero}>
                <div className={styles.hero_content}>
                    <p>
                        Welcome to School of Post Basic
                        Psychiatric Nursing, FNPH Kaduna
                    </p>
                </div>
            </div>
        </section>
    )
}