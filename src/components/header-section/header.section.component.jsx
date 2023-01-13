import EmailInput from '../email sub/subscribe.component';
import './header.section.component.css';


const HeaderSection = () =>{
    return(
        <div className='bg-hs'>
            <p className='bg-title'>Our blog</p>
            <p className='bg-desc'><strong>Tech News</strong> <span>and</span> <strong>Updates</strong></p>
            <p className='bg-sub-txt'>Subscribe to learn about new products, features, the latest in technology and updaates.</p>
            <EmailInput />
        </div>
    )
}


export default HeaderSection;