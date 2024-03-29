import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <div >
            <nav className="navbar main_navbar navbar-expand-lg bg-light">
                <div className="container">
                    <NavLink className="navbar-brand navbar_logo py-1" to="/">
                        {/* <img src="/images/logo.webp" alt="bannerr-logo" className='img-fluid' /> */}
                        <img src="/images/logo4.png" alt="bannerr-logo" className='img-fluid' />
                        <p className='main-text'>Code Web Byte</p>
                    </NavLink>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/images/menu.svg" alt="menu_btn" />
                    </button>
                    <div className="collapse navbar_link_main navbar-collapse" id="navbarSupportedContent">
                        <div className='child'>
                        <ul className="navbar-nav navbar_link me- auto ms-lg-5 gap-lg-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact-us">Contact us</NavLink>
                            </li>
                        </ul>   
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default MainNavbar;
