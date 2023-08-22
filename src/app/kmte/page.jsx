import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";
import axios from "axios";
import config from "../../config";

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
                <Jumbo title="Korean Medical Tourism Exhibition" breadcrumb={'KMTE'} action={{
                    text: 'REGISTER',
                    link: '#'
                }} />
                <div style={{padding: 50}}>
                    {/*  */}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Exhibition;