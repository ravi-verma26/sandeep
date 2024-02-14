import React from 'react';
import ContactUs from '../compontents/ContactUs';
const About = () => {
    const teamdata = [
        {
            aos: "fade-right",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-down",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-down",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-left",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-right",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-up",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-up",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
        {
            aos: "fade-left",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            subHeading: "Development Head",
            para: "10+ years experience in Node JS, React, Next JS, React Native, Express JS, PHP, Laravel, WordPress, and Yii2.",
        },
    ]
    return (
        <div id='home'>
            <section className='banner_section gradient_bg'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                            <div className="banner_text mt-5 pe-md-5">
                                <h1 className="banner_heading ">About Us</h1>
                                <h3>“We believe that by working together we can achieve anything”</h3>
                                <p>At our company, we pride ourselves on creating unique and innovative software solutions that help our clients stay ahead of the competition. Our team of Dedicated Professionals is committed to providing the highest quality products and services, and our company culture is one of collaboration and creativity</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 home-img" data-aos="fade-left" data-aos-duration="3000">
                            <img src="./images/about-banner.webp" alt="banner-image" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            {/* BANNER SECTION END */}

            <section className='services_section about_sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="services_text text-center mb-5">
                                <h2 className="main_heading">Welcome to About Us</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4" data-aos="fade-right" data-aos-duration="3000">
                            <div className="about page_images pe-lg-5 me-lg-5">
                                <img src="./images/aboutpage.webp" alt="about-page" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                            <div className="about_heading mb-4">
                                <h2 className='sub_heading'>About Us</h2>
                                <p>Webdabhands is a recognized web and app development company in
                                    Mohali. Our focus is on building market-intelligent tech solutions for both
                                    startups and enterprises.</p>
                                <p>It is award-winning IT Company based in Mohali that offers web design,
                                    software development, mobile apps and SEO services. We have a team of
                                    best website designer in Mohali area.</p>
                                <button type="text" className="buisness_button rounded-2">Red more</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className='services_section about_sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="services_text text-center mb-5">
                                <h2 className="main_heading">Team Work</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4" data-aos="fade-right" data-aos-duration="3000">
                            <div className="about page_images">
                                <img src="./images/team-wrok.webp" alt="team-wrok" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                            <div className="about_heading mb-4">
                                <h2 className='sub_heading'>LIFE AT Company</h2>
                                <p>“Our philosophy is to value collaboration and creativity.”</p>
                                <p>Company is an exciting place to work, with a tone of voice that is creative, professional, inspiring, and enticing. We provide a modern and innovative work culture that is perfect for those who want to be at the forefront of new technologies. The company has a team-oriented philosophy that values collaboration and creativity. Employees at Company are given the best opportunities to learn and grow in their careers.</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='gradient_bg buisness_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="text-center mb-5">
                                <h2 className='main_heading'>Testimonial</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4" data-aos="fade-right" data-aos-duration="3000">
                            <div className="about page_images">
                                <img src="./images/testimonial.webp" alt="team-wrok" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                            <div className="about_heading mb-4">
                                <h2 className='sub_heading'>We’ve Ever Seen</h2>
                                <p>Working with [Company Name] has been a game-changer for our business. Their team of experts not only delivered a top-notch solution but also provided exceptional support throughout the process. I can't recommend them enough! The team at [Company Name] is simply amazing. They took the time to understand our unique requirements and delivered a solution that exceeded our expectations. Their professionalism, expertise, and dedication to customer satisfaction are truly commendable. We couldn't be happier with the results.From the initial consultation to the final delivery, [Company Name] was a pleasure to work with. Their professionalism, expertise, and dedication to customer satisfaction are second to none.</p>

                                
                            </div>
                        </div>
                        {/* {teamdata.map((data, i) => (
                            <div className="col-12 col-md-6 col-xl-3" data-aos={`${data.aos}`} data-aos-duration="3000" key={i}>
                                <div className="services_column p-3 rounded-3 mb-4">
                                    <div className="services_image mb-4">
                                        <img src={`/images/${data.images}`} alt="marketing-image" className='img-fluid' />
                                    </div>
                                    <div className="team_data text-center">
                                        <h3 className='mb-2'>{data.heading}</h3>
                                        <h5>{data.subHeading}</h5>
                                        <p>{data.para}</p>

                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </section>
            <section className=' buisness_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="buisness_heaing mb-5">
                                <h2 className='main_heading'>Why choose us</h2>
                                <h4>We provide problem-solving techniques and useinnovative ideas to website making.</h4>
                            </div>
                        </div>
                        <div className="col-12" data-aos="fade-right" data-aos-duration="3000">
                            <div className="aboutimg">
                                <img src="./images/aboutimg.webp" alt="aboutimg" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='buisness_section gradient_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="buisness_heaing text-center mb-5">
                                <h2 className='main_heading'>Startup</h2>
                            </div>
                        </div>

                        <div className="started_data" data-aos="fade-right" data-aos-duration="3000">

                            <p>What started as a one-man division has blossomed into a full-service creative a nd digital marketing agency. Today, Webdabhands boasts a unique, close-knit team with experts in all facets of Internet development; strategic, creative and technical.</p>
                            <p>We believe our competitive advantage is the quality of our team. As we grow, we are committed to hiring and developing the very best people who strive for continuous innovation and extreme customer focus.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactUs />
        </div>
    );
};


export default About;
