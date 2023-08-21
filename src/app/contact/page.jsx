import styles from "../../styles/Contact.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Jumbo from "../../components/Jumbo";
import { BiEnvelope, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiUser } from "react-icons/bi";

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
                        <div className={`${styles.SocialList} ${styles.Facebook}`}>
                            <div className={styles.SocialIcon}>
                                <BiLogoFacebook />
                            </div>
                            <div className={styles.SocialText}>Korean Tourism Organization</div>
                        </div>
                        <div className={`${styles.SocialList} ${styles.Instagram}`}>
                            <div className={styles.SocialIcon}>
                                <BiLogoInstagram />
                            </div>
                            <div className={styles.SocialText}>@koreantourismorganization</div>
                        </div>
                        <div className={`${styles.SocialList} ${styles.Youtube}`}>
                            <div className={styles.SocialIcon}>
                                <BiLogoYoutube />
                            </div>
                            <div className={styles.SocialText}>Korean Tourism Organization</div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Contact;