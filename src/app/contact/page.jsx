import styles from "../../styles/Contact.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Jumbo from "../../components/Jumbo";
import { BiEnvelope, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiUser } from "react-icons/bi";

const Contact = () => {
    return (
        <>
            <Header active="contact" />
            <div className="content">
                <Jumbo title="Contact Us" />
                <div className={styles.Wrapper}>
                    <div className={styles.Left}>
                        <div className={styles.Title}>Get in Touch!</div>
                        <form action="#">
                            <Input label="Name" icon={<BiUser />} />
                            <Input label="Email" icon={<BiEnvelope />} />
                            <Input label="Message" multiline={true} />

                            <div className={styles.FormFooter}>
                                <button className={styles.Button}>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.Title}>Find Us!</div>
                        <div style={{flexDirection: 'row',display: 'flex', gap: 20}}>
                            <a href="https://facebook.com/Koreatourismorganizationindonesiaoffice/" target="_blank" className={`${styles.SocialIcon} ${styles.Facebook}`}>
                                <BiLogoFacebook />
                            </a>
                            <a href="https://twitter.com/ktojakarta?lang=en" target="_blank" className={`${styles.SocialIcon} ${styles.Twitter}`}>
                                <BiLogoTwitter />
                            </a>
                            <a href="https://www.youtube.com/user/KTOJakartaOffice" target="_blank" className={`${styles.SocialIcon} ${styles.Youtube}`}>
                                <BiLogoYoutube />
                            </a>
                            <a href="https://www.instagram.com/ktoid" target="_blank" className={`${styles.SocialIcon} ${styles.Instagram}`}>
                                <BiLogoInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Contact;