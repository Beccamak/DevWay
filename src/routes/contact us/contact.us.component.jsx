import './contact.us.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import Contact from '../../assets/images/contact-us.png';
import Button from '../../components/button/button.component';
const ContactUs = () => {
    return(
        <div >
         <div className='contact-header'>
         <div className='contact-header-txt'>
         <p>Thank you for your interest in our company's services. We value your trust in us and are committed to providing you with the best possible experience. We understand that every customer has unique needs and we strive to meet those needs by providing tailored solutions.</p>
         <p >
         We would like to assure you that our customer care team is available to assist you with any queries or concerns you may have. In order to make it easier for you to get in touch with us, we have provided a form below that you can fill out. Once the form is submitted, one of our customer care representatives will reach out to you soon.</p>
         </div>
         <img src={Contact} alt="Coral CLouds"/>        
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
         <div className='submit'>
         <Button children="Submit" />
         </div>
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