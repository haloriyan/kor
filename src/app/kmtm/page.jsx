import { BiCalendar, BiMap } from "react-icons/bi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";
import Section from "../../components/Section";
import styles from '../../styles/Home.module.css';

const BusinessMeeting = () => {
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo title="Korean Medical Tourism Mart" breadcrumb={'KMTM'} />
                <div style={{padding: 50}}>
                    <Section
                        title={''}
                        description={'Korean Medical Tourism Mart, offering services for beauty and health are featured at the Korea Medical Tourism Mart. Visitors have the chance to meet the seller 1-On-1 Business Meetings. If Yo’re considering receiving medical attention or having cosmetic surgery in Korea.'}
                        image={'/images/ill.jpg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 75,marginBottom: 75}}>Where Will KMTM be Held?</h3>

                    <Section
                        reversed={true}
                        title={'Meet The Location'}
                        left={
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5736780871334!2d112.67336147512744!3d-7.2892487927181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc498f1cffc5%3A0xc0718e958df80ba0!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1692679511189!5m2!1sen!2sid" 
                                style={{border: 0,height: 300}}
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        }
                        description={
                            <>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiMap size={20} />
                                    </div>
                                    <div className={styles.BarText}>Pakuwon Mall, Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
                                </div>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiCalendar size={20} />
                                    </div>
                                    <div className={styles.BarText}>28 - 29 Oct 2023 | Korean Medical Tourism Mart</div>
                                </div>
                            </>
                        }
                    />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BusinessMeeting;