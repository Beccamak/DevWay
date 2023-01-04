import './contact.us.styles.css';
import ContactImage from '../../assets/images/contact-us.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as Contact} from '../../assets/categories/contact-us.svg';
const ContactUs = () => {
    return(
        <div >
         <div className='contact-header'>
         <div className='contact-header-txt'>
         <p></p>
         <p >Thank you for your interest in our services and business solutions. Share your requirements and ideas with us and get all your question answered by our experts. Please fill out this form and our representative will get back to you shortly. We are here to help you accelerate digital transformation and drive innovation.</p>
         </div>
         <Contact  className='contact-us-blob'/>
        
         </div>

         <div className='contact'>
         <p className='discuss'>Let's discuss your project</p>
         <div className='form-container'>
         <div className='contact-speech' >
        <FontAwesomeIcon className="side contact-icon"  icon={faInstagramSquare} />
        <FontAwesomeIcon className="side contact-icon"  icon={faTwitter} />
        <FontAwesomeIcon className="side contact-icon"  icon={faFacebook} />
        <FontAwesomeIcon className="side contact-icon"  icon={faLinkedin} />
         </div>
         <form className='form'>
         <p className='personal-info'>Personal Information</p>
         <div className='details-section'>
         <div className='section-1'>
         
         <label>Full Name</label>
         <input type="text" placeholder='Rebecca Makinde' required/>
         
         <label>Company's Name</label>
         <input type="text"  placeholder='My Company' required/>
         
         </div>
         <div className='section-2'>
         <label>Email Address</label>
         <input type="text" placeholder='funmitof@mycompany.com' required/>
         
         <label>Contact Number</label>
         <input type="text"  className='k' placeholder='Telephone number' required/>
         </div>
         </div>
         <label>Project Brief</label>
         <textarea type="text" className='brief' required/>
         <input type="file" className='file' size="40" accept='.pdf, .doc, .docx' ></input>
         <p>(.doc, .docx and .pdf files below 5MB size allowed.)</p>
         <button className='submit'>Submit</button>
         </form>
         <div className='get-in-touch'>
         <p className='text'>Get in Touch</p>

         <div className='git-details'>
         <FontAwesomeIcon  className="contact-icon" icon={faLocation} />
         <p>7 Brewery Road, Plumstead, London, SE18 7PS, UK</p>
         </div>
         <div className='git-details'>
         <FontAwesomeIcon  className="contact-icon" icon={faEnvelope} />
         <p>info@coralclouds.tech</p>
         </div>
         <div className='git-details'>
         <FontAwesomeIcon  className="contact-icon" icon={faPhone} />
         <p>+44 7488371561</p>
         </div>
         <div className='git-details'>
         <FontAwesomeIcon  className="contact-icon" icon={faWhatsapp} />
         <p>+44 7488371561</p>
         </div>
         </div>
         </div>
         </div>
        </div>
    )
}



export default ContactUs;