import {Link, Outlet } from 'react-router-dom';
import './navigation.styles.css';
import {Fragment, useState} from 'react';



const Navigation = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const onPageChangeHandler = (event) =>{
        console.log(event.target)
        setActiveLink(event.target.innerText);
    }
  const pages = [{Home: ""}, {"About us": "about-us"}, {"Contact us": "contact-us"}, {"Blog": "blog"}]
    return(
        <Fragment>
        <div className='nav'>
        <div className="nav-bar container">
        <div className='start'>
        <div className='logo-con'>
        <p className='logo-txt'>CoralClouds</p>
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
        <Link className='log-in' to="/">Products</Link>
        <Link className='sign-up' to="/">Blog</Link>
        </div>
        </div>
        </div>
        <Outlet />
        </Fragment>
    )
}

export default Navigation;