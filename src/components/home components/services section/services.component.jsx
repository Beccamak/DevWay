import './services.styles.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
const Services = () => {
    const servicesA= [{"Product Design": [faDesktop, "Lorem Ipsum Product Design utilizzato nel settore della tipografia e della stampao."]},
    {"Mobile Development":[faDesktop, "Lorem Ipsum Mobile Development  utilizzato nel settore della tipografia e della stampao."]},
    {"Website Development":[faDesktop, "Lorem Ipsum Website Development utilizzato nel settore della tipografia e della stampao."]}];
    const servicesB = [{"Brand Consultation":[faDesktop, "Lorem Ipsum Brand Consultation utilizzato nel settore della tipografia e della stampao."]},
    {"Data Analytics":[faDesktop, "Lorem Ipsum Data Analytics utilizzato nel settore della tipografia e della stampao."]}];
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [ifDesktop, setIfDesktop] = useState(false);
    return(
        <div ref={ref} className='services-con' style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
        <div className='services-text-con'>
        <p className='our-services'>Our Services</p>
        <p className='services-text'>These are the services that we render to our clients and that also involves our <Link className='product' to="/our-products">products</Link></p>
        </div>
       {ifDesktop?  <div className='services-cards'>
        <div className='sers'>
        {servicesA.map((service) => {
            return <div className='hi'>
            <div className={`service-card  top-card`}>
            <div className='card-con top'>
            <FontAwesomeIcon className='services-icon' icon={service[Object.keys(service)][0]}/>
            <p className='card-title '>{Object.keys(service)}</p>
            <p className='card-text' >{service[Object.keys(service)][1]} </p>
            </div>
            
            </div>
            </div>
        })}
        </div>
        <div className='ser'>
        <div></div>
        {servicesB.map((service) => {
            return <div className="service-card service">
                    <div className='card-con'>
            <FontAwesomeIcon className='services-icon'  icon={service[Object.keys(service)][0]}/>
            <p className='card-title'>{Object.keys(service)}</p>
            <p className='card-text' >{service[Object.keys(service)][1]} </p>
            </div>
            
            </div>
        })}
        <div></div>
        </div>
        </div>
    :
    
    // mobile
    <div className='services-cards'>
    {servicesA.map((service) => {
        return <div className='card-ch'>
        <FontAwesomeIcon className='services-icon' icon={service[Object.keys(service)][0]}/>
        <p className='card-title '>{Object.keys(service)}</p>
        <p className='card-text' >{service[Object.keys(service)][1]} </p>
        </div>
        
    })}
    {servicesB.map((service) => {
        return <div className="card-ch">
        <FontAwesomeIcon className='services-icon'  icon={service[Object.keys(service)][0]}/>
        <p className='card-title'>{Object.keys(service)}</p>
        <p className='card-text' >{service[Object.keys(service)][1]} </p>
        </div>
    })}
    </div>
    }
        </div>
    )
}

export default Services;