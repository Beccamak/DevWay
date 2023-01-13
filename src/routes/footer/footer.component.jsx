import './footer.styles.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const Footer = () => {
    const [value, setValue] = useState("");
    return (
        <div className='footer'>
            <div className='footer-items'>
                <div  className='footer-logo-col'>
                    <div className='logo'>
                    <Link className='footer-logo' to='/'>Coral Clouds</Link>
                    </div>
                    <p className='copyright'>Copyright &copy; 2023 by Rebecca, Inc. All rights reserved.</p>
                </div>
                <div>
                    <p className='footer-heading'>Contact us</p>
                    <address className='contacts'>
                    <p className='address'>7 Brewery Road, Plumstead, London, SE18 7PS, UK</p>
                    <p>
                    <Link className='footer-link' to="tel:+447488371561">+44 7488371561</Link>
                    <br />
                    <Link className='footer-link' to="mailto:info@coralclouds.tech">info@coralclouds.tech</Link>
                    </p>
                    </address>
                    
                </div>
                
                <div>
                <p className='footer-heading'>Company</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">About us</Link>
                        <Link className='footer-link' to="/">For Business</Link>
                        <Link className='footer-link' to="/">Partners</Link>
                        <Link className='footer-link' to="/">Careers</Link>
                        </ul>
                </div>
                <div>
                    <p className='footer-heading'>Our</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/our-products">Products</Link>
                        <Link className='footer-link' to="/blog">Blog</Link>
                        </ul>
                </div>
                <div>
                <p className='footer-heading'>Resources</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">Help center</Link>
                        <Link className='footer-link' to="/">Privacy & terms</Link>
                        <Link className='footer-link' to="/">Faqs</Link>
                        </ul>
                        </div>
                        </div>
                        <div className='footer-email'>
                        <input className='footer-input' value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter your email"/>
                        <button className='footer-btn'>Subscribe</button>
                        </div>
        </div>
    )
}



export default Footer;

// </clipPath>
//      <defs>
//      <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
//      </defs>
//      <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" href="https:i.ibb.co/qpTBjzQ/pexels-fauxels-3184634.jpeg" clip-path="url(#user-space)"/>
     
