import './post.card.component.styles.css';
import {Tags } from '../../posts';



const PostCard = ({cardDetails}) => {
   const  {imgUrl, writer, date, title, description, tags} = cardDetails;
    return(
        <div className='posts-container'>
        <img  classname="" src={imgUrl}/>
        <p className='post-name'>{writer} .{date}</p>
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
        
    )
}

export default PostCard;