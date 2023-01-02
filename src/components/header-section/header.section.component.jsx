import './header.section.component.css';


const HeaderSection = () =>{
    return(
        <div className='bg-hs'>
            <p className='bg-title'>Our blog</p>
            <p className='bg-desc'><strong>Tech News</strong> <span>and</span> <strong>Updates</strong></p>
            <p className='bg-sub-txt'>Subscribe to learn about new products, features, the latest in technology and updaates.</p>
            <div className='email-stn'>
            <input className='email-input' placeholder="Enter your email"/>
            <button className='sub-btn'>Subscribe</button>
            </div>
        </div>
    )
}


export default HeaderSection;