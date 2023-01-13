import './recent.styles.css';
import Posts from '../../posts';
import PostCard from '../post card/post.card.component';
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
                <img  classname="" src={imgUrl}/>
                <div className='post-details'>
                <p className='post-name'>{writer} &#183;  {date}</p>
                <p className='post-title'>{title}</p>
                <p  className='post-des'>{description}</p>
                <div className='tags'>
                {
                    tags.map(tag => {
                        console.log()
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
    // return <div className={`top-post post-${index + 1}`}>
    // <PostCard cardDetails={post}/>
    // </div>
    
// <div className='top-post'>
// <img  classname="top-post-img" src={PostPicture}/>
// <p className='post-name'>Funmi Makinde . 23 Jan 2023</p>
// <p className='post-title'>Building your stock</p>
// <p  className='post-des'>description</p>
// <p className='tags'>design research presentation</p>
// </div>
// <div className='top-post'>
// <img classname="top-post-img" src={PostPicture}/>
// <p className='post-name'>Rebecca Makinde . 21 Jan 2023</p>
// <p  className='post-title'>Chat GPT: Open AI</p>
// <p  className='post-des'>description</p>
// <p className='tags'>design research presentation</p>
// </div>

// <div className='top-post'>
// <img classname="top-post-img" src={PostPicture}/>
// <p  className='post-name'>Samuel Freetown . 20 Jan 2023</p>
// <p  className='post-title'>UI/UX design practices</p>
// <p  className='post-des'>How do I think of a description for this post when I haven't eaten, ahhh it is unfair . I need to get food first</p>
// <p className='tags'>design research presentation</p>
// </div>
 