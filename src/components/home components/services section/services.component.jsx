import './services.styles.css';


const Services = () => {
    const arr = [1,2,3];
    const arrr = [1,2];
    return(
        <div className='services-con'>
        <div className='services-text-con'>
        <p className='our-services'>Our Services</p>
        <p className='services-text'>Lokfw mdkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjfffffff</p>
        </div>
        <div className='services-cards'>
        <div className='sers'>
        {arr.map((ar, index) => {
            return <div className={`service-card  top-card s${index + 1}`}>
            <div className='card-con'>
            <p className='card-title '>Web development</p>
            </div>
            
            </div>
        })}
        </div>
        <div className='ser'>
        <div></div>
        {arrr.map((ar, index) => {
            return <div className={`service-card service ${index + 1}`}>
            
            <div className='card-con'>
            <p className='card-title'>Web development</p>
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