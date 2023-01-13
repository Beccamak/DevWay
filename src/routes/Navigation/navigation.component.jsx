import {Link, Outlet } from 'react-router-dom';
import './navigation.styles.css';
import {Fragment, useState} from 'react';
import Footer from "../footer/footer.component";
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const onPageChangeHandler = (event) =>{
        console.log(event.target)
        setActiveLink(event.target.innerText);
    }
    const navigate = useNavigate();
    const goToHomePage = () =>{
        navigate('/')
    }
  const pages = [{Home: ""}, {"About us": "about-us"}, {"Contact us": "contact-us"}, {"Our Products": "our-products"}]
    return(
        <Fragment>
        <div className='nav container'>
        <div className="nav-bar ">
        <div className='start'>
        <div className='logo-con'>
        <p className='logo-txt' onClick={goToHomePage}>CoralClouds</p>
        </div>
        <div className='pages-con'>
        {pages.map((page, index)=> {
            console.log(activeLink, Object.keys(page)[0])
            return <div key={index}>
            <Link className={`page ${activeLink === Object.keys(page)[0]? "active-link" : ""}` } onClick={onPageChangeHandler} to={`/${page[Object.keys(page)]}`}>{Object.keys(page)}</Link>
            </div>
        })}
        </div>
        </div>
        <div className='account-con'>
        <Link className='sign-up' to="/blog">Blog</Link>
        
        </div>
    
        </div>
        </div>
        <div className="container">
        <Outlet />

        </div>
        <Footer />
        

        </Fragment>
    )
}

export default Navigation;