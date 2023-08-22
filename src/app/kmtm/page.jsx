import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";

const BusinessMeeting = () => {
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo title="Korean Medical Tourism Mart" breadcrumb={'KMTM'} action={{
                    text: 'REGISTER',
                    link: '#'
                }} />
                <div style={{padding: 50}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam nulla saepe nisi. Maiores placeat veniam laborum distinctio quos sapiente pariatur aspernatur autem deleniti vero ratione delectus, eligendi illo alias?
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BusinessMeeting;