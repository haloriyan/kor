import Image from "next/image";
import { MdEast } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css';
import Section from "../components/Section";
import { BiCalendar, BiMap } from "react-icons/bi";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Korean Medical Tourism Festival 2023</title>
            </Head>
            <Header />
            <div className="content">
                <img src="/images/slide_banner.jpeg" alt="Top Banner" style={{
                    width: '100%',
                    aspectRatio: 16/9,
                    objectFit: 'cover'
                }} />
                {/* <SliderBanner
                    datas={[
                        {image: '/images/slide_banner.jpeg'},
                        {image: '/images/GATE_1.jpg'},
                        {image: '/images/BOOTH_EXHIB_1.jpg'},
                        {image: '/images/MAIN_STAGE_1.jpg'},
                        {image: '/images/GATE_2.jpg'}
                    ]}
                /> */}

                <Section
                    image={'/images/slide_banner.jpeg'}
                    title={'Korean Medical Tourism Festival 2023'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos repellendus. Necessitatibus harum libero consectetur alias est aliquid quibusdam aspernatur repellat tempore reiciendis maxime explicabo quis, accusamus deleniti totam iure.'}
                    action={
                        <a className={styles.ContentAction}>
                            LEARN MORE
                            <MdEast />
                        </a>
                    }
                />

                <div className={styles.Flexing}>
                    <div className={styles.Card}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5736780871334!2d112.67336147512744!3d-7.2892487927181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc498f1cffc5%3A0xc0718e958df80ba0!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1692679511189!5m2!1sen!2sid" 
                            style={{border: 0}}
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            className={styles.MapFrame}
                        ></iframe>
                        <div className={styles.BoxContent}>
                            <div className={styles.BoxTitle}>Korean Medical Tourism Expo</div>
                            <div className={styles.BoxBar}>
                                <div className={styles.BarIcon}>
                                    <BiMap size={20} />
                                </div>
                                <div className={styles.BarText}>The Westin Surabaya, Jl. Raya Lontar No. 2, Surabaya</div>
                            </div>
                            <div className={styles.BoxBar}>
                                <div className={styles.BarIcon}>
                                    <BiCalendar size={20} />
                                </div>
                                <div className={styles.BarText}>27 October 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Card}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.574626985207!2d112.6731483751275!3d-7.289141392718268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc364741c0c3%3A0xba3176bca0f4205a!2sPakuwon%20Mall!5e0!3m2!1sen!2sid!4v1692679983278!5m2!1sen!2sid"
                            style={{border: 0}}
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            className={styles.MapFrame}
                        ></iframe>
                        <div className={styles.BoxContent}>
                            <div className={styles.BoxTitle}>Korean Medical Tourism Mart</div>
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
                                <div className={styles.BarText}>28 - 29 October 2023</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home;