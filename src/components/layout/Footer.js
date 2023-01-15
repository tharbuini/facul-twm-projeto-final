import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import styles from '../css/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>

            <p className={styles.copyright}>Thiago Seguros &copy; 2022</p>
            
        </footer>
    )
}

export default Footer;