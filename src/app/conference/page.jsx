import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";

const styles = {
    title: {
        fontSize: 50,
        margin: 0,
        fontWeight: 700
    },
    separator: {
        width: 100,
        height: 5,
        background: '#333',
        marginTop: 20,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginTop: 40,
    },
    box: {
        background: '#fff',
        boxShadow: '1px 1px 5px 1px #ddd',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    photo: {
        height: 100,
        width: 100,
        borderRadius: 666,
        objectFit: 'cover'
    },
    credential: {
        color: '#999',
        fontSize: 12,
    },
    name: {
        marginTop: 10,
        marginBottom: 5
    }
}

const Conference = () => {
    const speakers = [
        {name: "Robbie Reyes", job: "Software Engineer", company: "Facebook, Inc", photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Gabriel_Luna_by_Gage_Skidmore_2.jpg'},
        {name: "Scarlett Johansson", job: "Data Scientist", company: "Grab, Inc", photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg'},
        {name: "Elizabeth Olsen", job: "Business Analyst", company: "Google", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Elizabeth_Olsen_by_Gage_Skidmore_2.jpg/640px-Elizabeth_Olsen_by_Gage_Skidmore_2.jpg'},
        {name: "Johnny Blaze", job: "Artificial Intelligence Expert", company: "OpenAI", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/640px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg'},
    ];
    return (
        <>
            <Header active="conference" />
            <div className="content">
                <Jumbo title="Conference" />
                <div style={{padding: 50}}>
                    <h2 style={styles.title}>
                        Keynote Speakers
                    </h2>
                    <div style={styles.separator}></div>
                    <div style={styles.wrapper}>
                        {
                            speakers.map((speak, s) => (
                                <div style={styles.box}>
                                    <img src={speak.photo} alt={speak.name} style={styles.photo} />
                                    <div style={styles.name}>{speak.name}</div>
                                    <div style={styles.credential}>
                                        {speak.job} at {speak.company}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Conference;