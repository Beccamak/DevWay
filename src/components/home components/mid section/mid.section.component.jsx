import './mid.section.component.css';
import {motion, useAnimation} from 'framer-motion';
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
        <p>A Preferred Software Development Company, Providing solutions
        To Complexities and Technicalities</p>
        </div>
        <div className='line'></div>
        <div className='mid-down'>
        <p>We are laser-focused on transforming businesses with the power of the advanced technologies that help today’s businesses be prepared for tomorrow. With over three decades of experience working with various domains and technologies, we carefully understand businesses and deliver sustainable, resilient, and secure software solutions. Our customized approach to software development aims at reinventing business models, accelerating innovation, and strategically planning a digital roadmap that increases growth. We have helped the world’s popular brands thrive in their digital transformation initiatives and achieve business agility.</p>
        </div>
        </motion.div>
        </section>
    )
}

export default MidSection;