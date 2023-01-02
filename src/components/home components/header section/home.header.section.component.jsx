import './home.header-section.styles.css';
import {ReactComponent as Baby} from '../../../assets/categories/baby.svg';
import {ReactComponent as Car} from '../../../assets/categories/car.svg';
import {ReactComponent as Dot} from '../../../assets/categories/desktop.svg';
import { Link } from 'react-router-dom';
const HomeHeaderSection = ()  => {
    return(
        <div className='hm-hd-sc'>
        <div className='header-text'>
        <p className='we'>WE</p>
        <p className='hm-header-title'>Help businesses <br /> maximize revenue and <br />satisfy customers</p>
        <p className='hm-header-text'>Our best is put into helping you satisfy your clients and customers by providing solutions to the problems your customers are inderictly looking for and there
        by maximizing profits.</p>
        <Link className="contact-btn" to="/contact">Get in touch</Link>
        </div>
        <div className='header-pic'>
        <div className='gre '>
        <Baby  className='main-pic'/>
        <Car className='neon-header' />
        </div>

        </div>
        </div>
    )
}

export default HomeHeaderSection;