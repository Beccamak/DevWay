import AllPosts from '../../components/all bg posts/all.posts.component';
import RecentPosts from '../../components/bg recent posts/recent.component';
import HeaderSection from '../../components/header-section/header.section.component';
import './blog.component.css';

const Blog = () => {
    return(
        <div>
        <HeaderSection />
        <RecentPosts />
        <AllPosts />
        </div>
        )
    }
    
    export default Blog;