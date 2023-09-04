import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Jumbo from "../../components/Jumbo";
import Section from "../../components/Section";

const Program = () => {
    return (
        <>
            <Header active="program" />
            <div className="content">
                <Jumbo title="Program" />

                <Section
                    image={'/images/mcu.jpg'}
                    title={'Scan Gift Mystery'}
                    description={
                        'Visitors must register at KTO Booth first, do a mission scan QR barcodes after a consultation on 5 Seller Booth and get special merchandise from KTO.\n*T&C Applies'
                    }
                    descriptionStyle={{fontSize: 16}}
                />
                <Section
                    image={'/images/facial.jpg'}
                    title={'Lucky Draw'}
                    description={
                        'Visitors can get lucky draw ticket after consultation/ booking at Seller Booth and get a chance to win SQ Airlines tickets to Korea (round-trip).\n*T&C Applies'
                    }
                    descriptionStyle={{fontSize: 16}}
                    reversed={true}
                />
                <Section
                    image={'/images/GATE_1.jpg'}
                    title={'Instagram Challenge'}
                    description={
                        'Visitors can compete by take the documentation trough the highlight event on Instagram reels and mention @ktoid and get a chance to win Instax Camera.\n*T&C Applies'
                    }
                    descriptionStyle={{fontSize: 16}}
                />

                <Footer />
            </div>
        </>
    )
}

export default Program;