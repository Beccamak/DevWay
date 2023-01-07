import HomeHeaderSection from '../../components/home components/header section/home.header.section.component';
import MidSection from '../../components/home components/mid section/mid.section.component';
import Services from '../../components/home components/services section/services.component';
import Technologies from '../../components/home components/technologies-section/technologies.component';
import './home.styles.css';


const Home = () => {
    return(
        <div className='home'>
        <HomeHeaderSection />
        <MidSection />
        <Services />
        <Technologies />
        </div>
        )
    }
    
    
    export default Home;