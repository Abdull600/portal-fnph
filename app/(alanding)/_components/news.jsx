import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

import styles from './news.module.css';


export const NewsSection = () => {
    return (
        <section className={styles.news_and_events_container}>
            <div className={styles.news_events_heading}>
                <h1>news &amp; events</h1>
                <div className={styles.heading_line}></div>
            </div>
            <div className={styles.news_events_card_container}>
                <article className={styles.news_events_card}>
                    <Image
                        height={150}
                        width={150}
                        alt="news article banner"
                        src="/images/event.png"
                        className={styles.news_image}
                    />
                    <div className={styles.news_events_link}>
                        <h3>Provost Visits Jaji Hospital...</h3>
                        <a href="">
                            Read more
                            <span>
                                <IoMdArrowForward />
                            </span>
                        </a>
                    </div>
                </article>
                <article className={styles.news_events_card}>
                    <Image
                        height={150}
                        width={150}
                        alt="news article banner"
                        src="/images/event2.png"
                        className={styles.news_image}
                    />
                    <div className={styles.news_events_link}>
                        <h3>FNPH MD visits School...</h3>
                        <a href="">
                            Read more
                            <span>
                                <IoMdArrowForward />
                            </span>
                        </a>
                    </div>
                </article>
                <article className={styles.news_events_card}>
                    <Image
                        height={150}
                        width={150}
                        alt="news article banner"
                        src="/images/event3.png"
                        className={styles.news_image}
                    />
                    <div className={styles.news_events_link}>
                        <h3>2023/2024 Admission List out!</h3>
                        <a href="">
                            Read more
                            <span>
                                <IoMdArrowForward />
                            </span>
                        </a>
                    </div>
                </article>
            </div>
            <div className={styles.see_more_link}>
                <a href="">
                    see all
                    <span>
                        <IoMdArrowForward />
                    </span>
                </a>
            </div>
        </section>
    )
}