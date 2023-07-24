import './home.header-section.styles.css';
import {ReactComponent as Home} from '../../../assets/categories/home.svg';
import {ReactComponent as Picture} from '../../../assets/categories/picture.svg';
import Button from '../../button/button.component';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHeaderSection = ()  => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const navigate = useNavigate();

    const goToContactUsPage = () => {
      navigate("/contact-us")
    }
    return(
        <div ref={ref} className='hm-hd-sc'>
         <div className='header-text' >
        <p className='we' style={{
            "font-size": isInView ? "" : "1.8rem",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>WE</p>
        <p className='hm-header-title' style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>Help businesses <br /> maximize revenue and <br />satisfy customers</p>
        <p className='hm-header-text' style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>Our best is put into helping you satisfy your clients and customers by providing solutions to the problems your customers are inderictly looking for and there
        by maximizing profits.</p>
        <Button children="Get In Touch" onClick={goToContactUsPage} style={{
            transform: isInView ? "none" : "translateY(-400px)",
            opacity: isInView ? 1 : 0,
            padding: isInView? "": "2rem 4rem" ,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }} />
        </div>
        <div className='header-pic' style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
        <div className='gre '>
          <div className='main-pic'>
        <Home  />
        <Picture className='neon-header' />
          </div>

        
        </div>

        </div>
      
        </div>
    )
}

export default HomeHeaderSection;