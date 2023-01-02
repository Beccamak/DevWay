import './recent.styles.css';
import Posts from '../../posts';
import PostCard from '../post card/post.card.component';

const RecentPosts = () => {
    return(
        <div className='recent-posts'>
        <p className='recent-title'>Recent posts</p>
        <div className='posts-con'>
        {
            
            Posts.filter((_, index) => index <3).map((post)=> {
                return <div className='top-post'>
                <PostCard cardDetails={post}/>
                </div>
            })
        }
            
        
       
        </div>
        </div>
    )
}

export default RecentPosts;

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
 