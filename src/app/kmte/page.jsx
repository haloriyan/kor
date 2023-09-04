import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";
import axios from "axios";
import config from "../../config";
import Section from "../../components/Section";

const getExhibitors = async () => {
    const res = await fetch(`${config.baseUrl}/api/exhibitor`);
    return res.json();
}

const Exhibition = async () => {
    // const exhibitors = await getExhibitors();

    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo title="Korean Medical Tourism Exhibition" breadcrumb={'KMTE'} />
                <div style={{padding: 50}}>
                    <Section
                        title={''}
                        description={'"2023 KOREA MEDICAL TOURISM EXPO" which is a medical exhibition B2C located at Grand Atrium Pakuwon Mall Surabaya on 28th - 29th October 2023. This Event for general will provides information on medical and health, in order to increase the number of visitor arrivals in the future as well as expand and facilitate their spending while travelling in Korea. At this event, we will increase the reservation rate of inbound travel products and the number of inbound travel products.'}
                        image={'/images/ill.jpg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 75,marginBottom: 75}}>What Would Be in KMTE?</h3>

                    <Section
                        title={'Talk Show'}
                        description={'Talk show with the topic of the Wellness, Korea Medical Beauty, K-Make Over & Sharing Wow Korea Supporters 2023 Experience.'}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/ill.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={'Claw Machine & Fun Photo Box'}
                        description={'Play claw machine and win special gifts. Also Capture your moments inside fun photobox.'}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/claw-machine.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={'Make Your own Candle'}
                        description={'Experience a scent candle workshop learning how to make it by your own and bring it home.'}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"What's Your Tea Type"}
                        description={"What’s Your Tea Type kiosk, Visitors can choose what’s your tea type recommendation in easy way. "}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Nail Art"}
                        description={"Experience and choose your own favorite colour for your pretty nails."}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Make Over"}
                        description={"Experience the simple Korean looks from the Make Up Experts."}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"Techno Area"}
                        description={"Experiences a fun games Throwing ball & Arrow using Virtual Reality at Techno Booth, get more points and get following exchange gifts. "}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Exhibition;