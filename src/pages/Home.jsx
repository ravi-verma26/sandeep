import React, { useState } from 'react';
import ContactUs from '../compontents/ContactUs';

const Home = () => {
    const [webTechnologies,setWebTechnologies] = useState(false);

    const servucedata = [
        {
            aos: "fade-right",
            images: "digital-marketing.webp",
            heading: "Digital Marketing",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
        {
            aos: "fade-down",
            images: "web-development.webp",
            heading: "Web Development",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
        {
            aos: "fade-left",
            images: "mobile-development.webp",
            heading: "Mobile Development ",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
        {
            aos: "fade-right",
            images: "android-developemnt.webp",
            heading: "Android Developemnt ",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
        {
            aos: "fade-up",
            images: "angular.webp",
            heading: "Angular",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
        {
            aos: "fade-left",
            images: "react.webp",
            heading: "React",
            para: "Choose Webdabhands as your digital marketing partner to deliver digital marketing services. We’ll help accelerate your online growth and get you where you need to be. Proven SEO Results. Satisfaction Guaranteed. 95% Client Retention Rate. ",
        },
    ];
    const technologiesData = [
        {
            images: "tech_j.webp",
            technologies: "MONGO DB",
        },
        {
            images: "html5.webp",
            technologies: "HTML 5",
        },
        {
            images: "CSS.webp",
            technologies: "CSS",
        },
        {
            images: "BOOTSTRAP.webp",
            technologies: "BOOTSTRAP",
        },
    ]
    return (
        <div id='home'>
            <section className='banner_section gradient_bg mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                            <div className="banner_text text-center mt-md-5 text-sm-start pe-lg-5">
                                <p className="">Welcome to Web Dabhands</p>
                                <h1 className="banner_heading ">WEB &amp; MOBILE DEVELOPMENT</h1>
                                <h3>With  results driven digital <br /> marketing.</h3>
                                <p>Boost your website Traffic Meet the Webdabhands Agency.</p>
                                <div className="banner_button"><a href="#">Discover more</a></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 home-img" data-aos="fade-left" data-aos-duration="3000">
                            <img src="./images/banner.webp" alt="banner-image" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='services_section about_sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="services_text text-center mb-5">
                                <h2 className="main_heading">We Believe</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                            <div className="about_heading mb-4">
                                <h2 className='sub_heading'>“We believe that by working together we can achieve anything !”</h2>
                                <p>“You can focus on small businesses, who often need creative help but don’t have the budget for high-end designers. Become a one-stop shop for logo design, website design, and copywriting services.</p>
                                <p>Whether you're a seasoned professional or just starting your journey, we invite you to join us in making a positive impact on the world. Together, we can achieve greatness!</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4" data-aos="fade-left" data-aos-duration="3000">
                            <div className="about page_images">
                                <img src="./images/teams_a.webp" alt="team-wrok" className='img-fluid' />
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* SERVICE SECTION END */}
            <section className='gradient_bg buisness_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="buisness_heaing text-center mb-5">
                                <h2 className="main_heading">Welcome to Web Technologies</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7" data-aos="fade-right" data-aos-duration="3000">
                            <div className="row">
                                {technologiesData.map((data, i) => (
                                    <div className="col-12 col-lg-6" key={i}>
                                        <div className="technologies_column mb-4 text-center">
                                            <div className="technologies_image mb-3">
                                                <img src={`./images/${data.images}`} alt="tech-image" className='img-fluid' />
                                            </div>
                                            <div className="technologies_data">
                                                <h4>{data.technologies}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-lg-5" data-aos="fade-left" data-aos-duration="3000">
                            <div className="buisness_column mb-4">
                                <h3 className="buisness_sub_heading">Technologies</h3>
                                <p>Web Technology refers to the various tools and techniques that are utilized in the process of communication between different types of devices over the Internet. A web browser is used to access web pages. Web browsers can be defined as programs that display text, data, pictures, animation, and video on the Internet. Hyperlinked resources on the World Wide Web can be accessed using software interfaces provided by Web browsers.{webTechnologies ? "The web browser is an application software to explore www (World Wide Web). It provides an interface between the server and the client and requests to the server for web documents and services.":""}</p>
                                <button type='text' className='buisness_button rounded-2' 
                                onClick={()=>setWebTechnologies(!webTechnologies)}>
                                    {webTechnologies ? `Read Less`:`Read More`}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* BANNER SECTION END */}
            <section className='services_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="services_text text-center mb-5">
                                <h2 className="main_heading">Our Valuable Services
                                </h2>
                            </div>
                        </div>
                        {servucedata.map((data, i) => (
                            <div className="col-12 col-md-6 col-xl-4" data-aos={`${data.aos}`} data-aos-duration="3000" key={i}>
                                <div className="services_column p-3 rounded-3 mb-4">
                                    <div className="services_image mb-4">
                                        <img src={`/images/${data.images}`} alt="marketing-image" className='img-fluid' />
                                    </div>
                                    <div className="services_data text-center">
                                        <h3>{data.heading}</h3>
                                        <p>{data.para}</p>
                                        <button type='text' className='buisness_button rounded-2'>
                                            Get start  <img src="/images/right.svg" alt="right-image" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* technologies SECTION END */}
            <ContactUs />
        </div>
    );
};


export default Home;
