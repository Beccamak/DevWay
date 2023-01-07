import './services.styles.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const arr = [1,2,3];
    const arrr = [1,2];
    return(
        <div className='services-con'>
        <div className='services-text-con'>
        <p className='our-services'>Our Services</p>
        <p className='services-text'>These are the services that we render to our clients and that also involves our <Link to="/">products</Link></p>
        </div>
        <div className='services-cards'>
        <div className='sers'>
        {arr.map((ar, index) => {
            return <div className='hi'>
            <div className={`service-card  top-card`}>
            <div className='card-con top'>
            <p className='card-title '>Web development</p>
            </div>
            
            </div>
            </div>
        })}
        </div>
        <div className='ser'>
        <div></div>
        {arrr.map((ar, index) => {
            return <div className={`service-card service ${index + 1}`}>
            
            <div className='card-con'>
            <FontAwesomeIcon className='services-icon' icon={faDesktop}/>
            <p className='card-title'>Web development</p>
            <p className='card-text' >Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassettao.
            </p>
            </div>
            
            </div>
        })}
        <div></div>
        </div>
        </div>
        </div>
    )
}

export default Services;