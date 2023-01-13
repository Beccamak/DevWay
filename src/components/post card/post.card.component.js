import './post.card.component.styles.css';
import {Tags } from '../../posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const PostCard = ({cardDetails}) => {
   const  {imgUrl, writer, date, title, description, tags} = cardDetails;
    return(
        <div className='all-posts-container'>
        <img  classname="all-post-img" src={imgUrl}/>
        <p className='post-name'>{writer} &#183; {date}</p>
        <div className='arr-name'>
        <p className='post-title'>{title}</p>
        <FontAwesomeIcon  className='arrow' icon={faArrowUp} />
        </div>
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
        
    )
}

export default PostCard;