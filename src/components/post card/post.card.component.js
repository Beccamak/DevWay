import './post.card.component.styles.css';



const PostCard = ({cardDetails}) => {
   const  {imgUrl, writer, date, title, description, tags} = cardDetails;
    return(
        <div className='posts-container'>
        <img  classname="" src={imgUrl}/>
        <p className='post-name'>{writer} .{date}</p>
        <p className='post-title'>{title}</p>
        <p  className='post-des'>{description}</p>
        <p className='tags'>{tags}</p>
        </div>
        
    )
}

export default PostCard;