import Image from "next/image"
import { Logo } from "./logo"

import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_contents}>
                <div className={styles.footer_logo}>
                    <Logo />
                </div>
                <ul className={styles.quick_links}>
                    <li className={styles.title}>
                        <span>quick links</span>
                    </li>
                    <li>
                        <a href="#">FNPH</a>
                    </li>
                    <li>
                        <a href="#">KDSG</a>
                    </li>
                    <li>
                        <a href="#">Ministry of Health</a>
                    </li>
                </ul>

                <ul className={styles.contact_details}>
                    <li className={styles.title}>
                        <span>contact us</span>
                    </li>
                    <li className={styles.hidden_mobile_contact}>
                        <span>Call us on: 123-456-7890</span>
                    </li>
                    <li className={styles.hidden_mobile_contact}>
                        <span>e-mail: admin@portal.com</span>
                    </li>
                    <li className={styles.hidden_desk_contact}>
                        <p><span>hotel reservation:</span> 123-456-7890</p>
                    </li>
                    <li className={styles.hidden_desk_contact}>
                        <p><span>ticket office:</span> 123-456-7890</p>
                    </li>
                </ul>

                <div className={styles.socials}>
                    <p className={styles.title}>social</p>
                    <ul className={styles.social_handles}>
                        <li>
                            <a href="#">
                                <Image
                                    height={20}
                                    width={20}
                                    alt="fb icon"
                                    src="/fb.svg"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image
                                    height={20}
                                    width={20}
                                    alt="instagram icon"
                                    src="/instagram-logo.svg"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image
                                    height={20}
                                    width={20}
                                    alt="X app icon"
                                    src="/bxl-twitter.svg"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image
                                    height={20}
                                    width={20}
                                    alt="youtube icon"
                                    src="/youtube-logo.svg"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_line}></div>
            <div className={styles.copy_rights}>
                <p><span>&copy;</span> 2024 FNHP | All Rights Reserved</p>
            </div>
        </footer>
    )
}