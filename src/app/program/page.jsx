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
                    title={'Program A'}
                    description={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.'
                    }
                />
                <Section
                    image={'/images/facial.jpg'}
                    title={'Program B'}
                    description={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.'
                    }
                    reversed={true}
                />
                <Section
                    image={'/images/GATE_1.jpg'}
                    title={'Program C'}
                    description={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur quasi a sequi quaerat. Similique, accusantium ea sequi quidem, quasi laborum ipsam ullam rem autem alias sed excepturi? Tempora, eum.'
                    }
                />

                <Footer />
            </div>
        </>
    )
}

export default Program;