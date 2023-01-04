import PostCard from "../post card/post.card.component";
import './all.posts.styles.css';
import Posts from "../../posts";

const AllPosts = () => {
    return(
      <div className="all-posts">
      <div className="posts-header">
      <p className="posts-title">All blog posts</p>
      <input  type="text" placeholder="Search posts" className="search-post"/>
      </div>
      <div className="post-cards">
      { Posts.filter((_, index) => index>3).map(post => {
         return <PostCard cardDetails={post} />
      })
   }
   </div>
      </div>
    )
}

export default AllPosts;