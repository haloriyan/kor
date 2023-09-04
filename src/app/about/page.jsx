import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbo from "../../components/Jumbo";
import Section from "../../components/Section";

const About = () => {
    const staffs = [
        {
            name: 'Mr. Yang Subae',
            credential: 'Director',
            photo: 'https://visitkorea.or.id/uploads/staff/fca327de4e72eed8cd4f196e1d9c5d4f.jpg'
        },
        {
            name: 'Mr. Kim DK',
            credential: 'Deputy Director',
            photo: 'https://visitkorea.or.id/uploads/staff/bef44b40096dba356c71dee69ae6258c.jpg'
        },
        {
            name: 'Akhmed Faezal Alhamdi',
            credential: 'GA Manager',
            photo: 'https://visitkorea.or.id/uploads/staff/643d0394c471f0f0b6f251d3f80a5c6e.jpg'
        },
        {
            name: 'Dwieta Rizki Nientyas',
            credential: 'Marketing Manager',
            photo: 'https://visitkorea.or.id/uploads/staff/71bf97be0b115d76273afdbf63df5815.jpg'
        },
        {
            name: 'Aprillia Tri Lestari',
            credential: 'Digital & Research Manager',
            photo: 'https://visitkorea.or.id/uploads/staff/3b09a2b45b0d0b1052aca850da31ede8.jpg'
        },
        {
            name: 'Seini Intanalia Zalukhu',
            credential: 'Wellness & Medical Manager',
            photo: 'https://visitkorea.or.id/uploads/staff/2a85704e10d2f6bd4144d13e5d6889ed.jpg'
        },
        {
            name: 'Hani Fadia Zahra',
            credential: 'M.I.C.E Specialist',
            photo: 'https://visitkorea.or.id/uploads/staff/c0ee605d901d4e74f2d7a85465f0fa92.jpg'
        },
        {
            name: 'Novi Nursyahbani',
            credential: 'PR & Media Executive',
            photo: 'https://visitkorea.or.id/uploads/staff/fe6ecb27fe685a322c0070434c39cbf0.jpg'
        }
    ]
    return (
        <>
            <Header active="about" />
            <div className="content">
                <Jumbo title="About" breadcrumb={'about'} />
                <div style={{padding: 50}}>
                    <div style={{fontSize: 18,textAlign: 'center',lineHeight: '42px',color: '#444',marginTop: 50,marginBottom: 50}}>
                        Sebagai pengenalan akan pentingnya hubungan budaya dan pariwisata antara Indonesia dan Korea, Organisasi Pariwisata Korea atau KTO (Korea Tourism Organization) telah membuka kantor perwakilan di Jakarta, Ibukota Indonesia. Kantor KTO Jakarta bertujuan untuk mempromosikan budaya dan pariwisata Korea kepada masyarakat Korea dan Indonesia seperti dengan menggelar program pertukaran dan acara kerja sama kebudayaan.
                    </div>

                    <Section
                        reversed={true}
                        title={'Aktivitas Kami'}
                        description={`Tujuan utama Kantor KTO Jakarta adalah untuk memperkenalkan Korea kepada agen-agen perjalanan dan masyarakat umum melalui berbagai aktivitas yang meliputi; pameran, proyek kerja sama pariwisata, dan beragam acara kebudayaan. Melalui acara-acara ini, kami mengharapkan adanya ikatan yang tercipta antara agen perjalanan Korea, perusahaan penerbangan, rumah sakit dan perusahaan lainnya yang bergerak disektor pariwisata guna meningkatkan hubungan bisnis internasional antara Korea dan negara Asia lainnya.

Dalam upaya mempromosikan pariwisata Korea kepada media dan agen perjalanan, Kantor KTO Jakarta secara teratur memberikan penawaran perjalanan ke Korea kepada para jurnalis dan penyelenggara tur agar mereka dapat merasakan keindahan dan budaya, serta perkembangan perekonomian Korea secara langsung.

Kantor KTO Jakarta juga menyediakan berbagai buku panduan wisata penting untuk mempromosikan pariwisata Korea. Buku panduan dan brosur pariwisata tersedia secara gratis bagi wisatawan Indonesia yang hendak berkunjung ke Korea Selatan. Para pegawai juga telah dilengkapi dengan pengetahuan secara mendalam tentang Korea sehingga mereka akan menyambut dan menangani pelanggan yang datang dengan ramah dan profesional. Bagi siapapun yang datang berkunjung ataupun menghubungi Kantor KTO Jakarta berkesempatan untuk mendapatkan informasi dan saran mengenai pariwisata Korea, seperti; ‘highlights’ perjalanan wisata ke Korea, pariwisata medis, prosedur pembuatan visa, dan lainnya.`}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                    />

                    <Section
                        reversed={true}
                        title={'Staff'}
                        description={`Tujuan utama Kantor KTO Jakarta adalah untuk memperkenalkan Korea kepada agen-agen perjalanan dan masyarakat umum melalui berbagai aktivitas yang meliputi; pameran, proyek kerja sama pariwisata, dan beragam acara kebudayaan. Melalui acara-acara ini, kami mengharapkan adanya ikatan yang tercipta antara agen perjalanan Korea, perusahaan penerbangan, rumah sakit dan perusahaan lainnya yang bergerak disektor pariwisata guna meningkatkan hubungan bisnis internasional antara Korea dan negara Asia lainnya`}
                    />

                    <div style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap', gap: 20}}>
                        {
                            staffs.map((staff, s) => (
                                <div key={s} style={{display: 'flex',flexDirection: 'column',flexGrow: 1,alignItems: 'center',flexBasis: '20%',marginBottom: 40}}>
                                    <img src={staff.photo} alt={staff.name} style={{height: 100,width: 100,borderRadius: 99,marginBottom: 20}} />
                                    <div style={{fontWeight: '700',fontSize: 16}}>{staff.name}</div>
                                    <div style={{fontSize: 14,color: '#555',marginTop: 10}}>{staff.credential}</div>
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

export default About