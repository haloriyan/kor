import Image from "next/image";
import { MdEast } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rundown from "../components/Rundown";
import SliderBanner from "../components/SliderBanner";
import styles from '../styles/Home.module.css';
import Section from "../components/Section";

const Home = () => {
    return (
        <>
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

                <Footer />
            </div>
        </>
    )
}

export default Home;