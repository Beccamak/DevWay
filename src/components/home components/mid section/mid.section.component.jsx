import './mid.section.component.css';
import {motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const MidSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return(
        <section ref={ref} className="sec-2" >
        <motion.div  className='mid-section'style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
        <div className='mid-up'>
        <p >A Preferred Software Development Company, Providing solutions
        To Complexities and Technicalities</p>
        </div>
        <div className='line'></div>
        <div className='mid-down'>
        <p className='cv-lt'>
        We are a preferred software development company that is highly regarded and sought after by clients for our ability to provide solutions to complex and technical software problems. 
        We typically have a team of experienced and skilled software developers who are able to design, develop, and implement software systems that meet the specific needs of our clients.<br/> We specialize in software development, such as web development, mobile app development, or enterprise software development and also
         have expertise in industries or domains, such as healthcare or finance. Overall, we are a software development company that is known for delivering high-quality software solutions on time and on budget.
        </p>
        </div>
        </motion.div>
        </section>
    )
}

export default MidSection;