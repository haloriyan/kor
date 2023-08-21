import { BiCopyright, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <img 
                src={'/images/logo.png'} alt="Logo" 
                className={styles.FooterLogo}
            />
            <div className={styles.FooterCenter}>
                <div>Korea Medical Tourism Festival 2023</div>
                <div style={{marginTop: 10}}>27 - 28 Oct 2023</div>

                <div style={{
                    marginTop: 20,
                    color: '#777',
                }}>
                    <i><BiCopyright /> Korea Tourism Organization - 2023</i>
                </div>
            </div>
            <div className={styles.FooterRight}>
                <a href="#" className={`${styles.RightItem} ${styles.Facebook}`}>
                    <BiLogoFacebook size={24} />
                </a>
                <a href="#" className={`${styles.RightItem} ${styles.Instagram}`}>
                    <BiLogoInstagram size={24} />
                </a>
                <a href="#" className={`${styles.RightItem} ${styles.Youtube}`}>
                    <BiLogoYoutube size={24} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;