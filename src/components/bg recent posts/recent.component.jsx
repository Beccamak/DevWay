import './recent.styles.css';
import Posts from '../../posts';
import {Tags} from "../../posts";
const RecentPosts = () => {
    return(
        <div className='recent-posts'>
        <p className='recent-title'>Recent posts</p>
        <div className='posts-con'>
        {
            
            Posts.filter((_, index) => index <3).map((post, index)=> {
                const  {imgUrl, writer, date, title, description, tags} = post;
                return <div  className={` posts-container top-post post-${index + 1}`}>
                <div className={`recent-post-img${index + 1}`}>
                <img  classname="" src={imgUrl}/>
                </div>
                <div className={`post-details details-${index + 1}`}>
                <p className='post-name'>{writer} &#183;  {date}</p>
                <p className='post-title'>{title}</p>
                <p  className='post-des'>{description}</p>
                <div className='tags'>
                {
                    tags.map(tag => {
                        return <p  className="tag" style={{color: `${Tags[tag]}`, backgroundColor: `${Tags[tag]}11`}}> {tag}</p>
                    })
                }
                </div>
                </div>
                </div>
            })
        }
        
        
        
        </div>
        </div>
        )
    }
    
    export default RecentPosts;



//     <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//     <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
//     <path fill="#4D4DFF" d="M35.2,-62.4C46.6,-54.3,57.7,-47,67.2,-36.7C76.6,-26.5,84.5,-13.2,85.2,0.4C85.9,14.1,79.5,28.1,71.2,40.4C62.9,52.6,52.7,63.1,40.5,66.8C28.3,70.5,14.1,67.5,1.3,65.3C-11.5,63,-23.1,61.5,-34.5,57.3C-45.9,53.2,-57.1,46.3,-62.5,36.3C-67.8,26.3,-67.3,13.1,-66.5,0.4C-65.8,-12.3,-64.7,-24.5,-59.8,-35.3C-55,-46.2,-46.2,-55.6,-35.6,-64.2C-25,-72.8,-12.5,-80.6,-0.3,-80C11.8,-79.5,23.7,-70.5,35.2,-62.4Z" transform="translate(100 100)" />
//     </clipPath>
//     </defs>

//     <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlink:href="https://i.ibb.co/qpTBjzQ/pexels-fauxels-3184634.jpg" clip-path="url(#user-space)"/>
// </svg>


// <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
// <defs>
// <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
// <path fill="url(#sw-gradient)" d="M19,-33.5C25.3,-29.2,31.5,-25.5,36.2,-20C41,-14.5,44.2,-7.3,44.3,0C44.3,7.4,41.3,14.7,37.3,21.5C33.3,28.3,28.4,34.5,22,38.9C15.7,43.4,7.8,46,0.3,45.5C-7.3,45.1,-14.5,41.4,-21.5,37.4C-28.5,33.3,-35.3,28.8,-38.1,22.5C-40.9,16.2,-39.8,8.1,-39.5,0.2C-39.2,-7.7,-39.7,-15.5,-37,-22C-34.3,-28.5,-28.5,-33.9,-21.8,-37.9C-15.1,-42,-7.6,-44.8,-0.6,-43.7C6.3,-42.7,12.7,-37.8,19,-33.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path> 
// </clipPath>
// </defs>

// <image width="100%" height="100%" preserveAspectRatio="xMinYMin meet" xlink:href="https://i.ibb.co/qpTBjzQ/pexels-fauxels-3184634.jpg" clip-path="url(#user-space)"/>
// </svg>




