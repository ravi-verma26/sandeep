import React from 'react';
import { Link, } from 'react-router-dom';

const Footer = () => {
    return (
        <div >
            <footer className='footer_sec'>
                <div className="container">
                    <div className="inner_footer mb-3 mb-md-4">
                        <div className="row">
                            <div className="col-12 col-sm-7 col-lg-4">
                                <div className="footer_logo_column mb-4">
                                    <div className="footer_img">
                                        <img src='./logo2.png' alt='footer-logo' className='img-fluid' />
                                    </div>
                                    <div className="footer_text">
                                        <p>Webdabhands provide Professional New <br /> Enterprise website design information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="footer_links_column mb-4 px-md-4">
                                    <div className="main_link_footer ">
                                        <h3 className='mb-4'>
                                            Quick Links
                                        </h3>
                                        <ul className='list-unstyled'>
                                            <li className='mb-3'><Link to="#" className="text-decoration-none">Home</Link></li>
                                            <li className='mb-3'><Link to="#" className="text-decoration-none">Services</Link></li>
                                            <li className='mb-3'><Link to="#" className="text-decoration-none">About us</Link></li>
                                            <li className='mb-3'><Link to="#" className="text-decoration-none">Contact</Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="footer_links_column mb-4 px-md-4">
                                    <div className="main_link_footer">
                                        <h3 className='mb-4'>
                                            Contact us
                                        </h3>
                                        <div className="contact_data mb-3 d-flex align-items-center gap-2">
                                            <img src="./images/map.svg" alt="map-icons" className='img-fluid' />
                                            <p className="mb-0">Mohali Punjab</p>
                                        </div>
                                        <div className="contact_data mb-3 d-flex align-items-center gap-2">
                                            <img src="./images/mobile.svg" alt="map-icons" className='img-fluid' />
                                            <p className="mb-0">Mohali Punjab</p>
                                        </div>
                                        <div className="contact_data mb-3 d-flex align-items-center gap-2">
                                            <img src="./images/mail.svg" alt="map-icons" className='img-fluid' />
                                            <p className="mb-0">contact@webdabhands.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-6">
                            <div className="right_column mb-4 text-center text-md-start">
                                <h5>
                                    ©2024. Made with love in India • WebDaHands • All Rights Reserved. Privacy Policy
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="right_link_column mb-mb-4 text-center">
                                <span className='text-center'>
                                    <Link to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgba(8, 1, 20, 1)",transform: ";", msFilter: ";", }}><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                    </Link>
                                </span>
                                <span className='text-center'>
                                    <Link to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgba(8, 1, 20, 1)",transform: ";", msFilter: ";", }}><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                                    </Link>
                                </span>
                                <span className='text-center'>
                                    <Link to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgba(8, 1, 20, 1)",transform: ";", msFilter: ";", }}><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default Footer;