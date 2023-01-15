import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from '../css/Footer.module.css'

function Footer() {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer;