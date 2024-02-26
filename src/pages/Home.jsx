import React, { useState } from "react";
import ContactUs from "../compontents/ContactUs";

const Home = () => {
  const [webTechnologies, setWebTechnologies] = useState(false);

  const servucedata = [
    {
      aos: "fade-right",
      images: "digital-marketing.webp",
      heading: "Digital Marketing",
      para: "Choose CodeWebByte as your digital marketing partner to deliver exceptional digital marketing services. Our goal is to accelerate your online growth and guide you to success. With a focus on proven SEO strategies, we guarantee satisfaction and boast a remarkable 95% client retention rate",
    },
    {
      aos: "fade-down",
      images: "web-development.webp",
      heading: "Web Development",
      para: "Partner with CodeWebByte for cutting-edge web solutions that accelerate your digital growth and position your brand for success. Our team codind and architecture specializes in crafting high-performing websites and seamless user experiences, elevating your online platform with our expertise.",
    },
    {
      aos: "fade-left",
      images: "mobile-development.webp",
      heading: "Mobile Development ",
      para: "CodeWebByte is dedicated to crafting custom, user-centric mobile applications for iOS, Android,react-native and cross-platform so all. Partner with us to elevate your mobile presence with innovative, high-quality and mobile solutions that are tailored to meet your specific needs and exceed your expectations.",
    },
    {
      aos: "fade-right",
      images: "product-design.jpg",
      heading: "Product Design",
      para: "Corporate or a business logo design, Banner Design, Poster Design & other Design related to graphic media, we make it simple yet appealing Much of the design community is wondering: does graphic design require coding? Some favor seeking out the unicorns who can do both, design and coding, while others claim they don’t exist or only get in the way.",
    },
    {
      aos: "fade-up",
      images: "system-coding.jpg",
      heading: "System Coding",
      para: "System Coding involves the standards for rendering and building Web pages, including HTML, SVG, CSS and device APIs.Electronic devices like cell phones, laptops, and tablets require code to function properly. Coding allows humans to communicate with these devices. Modern technology such as traffic lights, calculators, smart TVs systems.",
    },
    {
      aos: "fade-left",
      images: "devops.jpg",
      heading: "Devops",
      para: "We specialize in harnessing the power of React to build modern web applications. Our proficient team utilizes React's component-based architecture and virtual DOM to create seamless user interfaces. Partner with us to bring your web application vision to life and leverage the full potential of React for your digital solutions. Jenkins with this DevOps.",
    },
  ];
  const technologiesData = [
    {
      // images: "tech_j.webp",
      // technologies: "MONGO DB",
      images: "angular1.png",
      technologies: "ANGULAR",
    },
    {
      //   images: "html5.webp",
      //   technologies: "HTML 5",
      images: "reactnative1.png",
      technologies: "REACT NATIVE",
    },
    {
      //   images: "CSS.webp",
      //   technologies: "CSS",
      images: "nodejs1.png",
      technologies: "NODE JS",
    },
    {
      //   images: "BOOTSTRAP.webp",
      //   technologies: "BOOTSTRAP",
      images: "python1.png",
      technologies: "PYTHON",
    },
  ];
  return (
    <div id="home">
      <section className="banner_section gradient_bg mt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="banner_text text-center mt-md-5 text-sm-start pe-lg-5">
                <p className="">Welcome to Code Web Byte</p>
                <h1 className="banner_heading ">
                  {/* WEB &amp; MOBILE DEVELOPMENT */}
                  ELEVATE YOUR ONLINE PRESENCE
                </h1>
                {/* <h3>
                  With results driven digital <br /> marketing.
                </h3> */}
                {/* <p>Boost your website Traffic Meet the CodeWebByte Agency.</p> */}
                <p>
                  Specializing in web and mobile development, we drive results
                  with digital marketing. Boost your website traffic with
                  CodeWebByte Agency.
                </p>
                <div className="banner_button">
                  <a href="#">Discover more</a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 mt-5 home-img"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src="./images/banner.webp"
                alt="banner-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services_section about_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="services_text text-center mb-5">
                <h2 className="main_heading">Our Philosophy</h2>
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="about_heading mb-4">
                <h3 className="sub_heading">
                  “Together, We Create Digital Excellence”
                </h3>
                <p>
                  At CodeWebByte, we empower businesses with top-tier design and
                  digital marketing services. From logo creation to website
                  development and compelling copywriting, we're your all-in-one
                  digital partner.
                </p>
                <p>
                  No matter where you are in your business journey, we're here
                  to elevate your brand. Join us in our mission to deliver
                  impactful digital solutions and drive success for every
                  client.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 mb-4"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="about page_images">
                <img
                  src="./images/teams_a.webp"
                  alt="team-wrok"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION END */}
      <section className="gradient_bg buisness_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="buisness_heaing text-center mb-5">
                <h2 className="main_heading">Welcome to Web Technologies</h2>
              </div>
            </div>
            <div
              className="col-12 col-lg-7"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="row">
                {technologiesData.map((data, i) => (
                  <div className="col-12 col-lg-6" key={i}>
                    <div className="technologies_column mb-4 text-center">
                      <div className="technologies_image mb-3">
                        <img
                          src={`./images/${data.images}`}
                          alt="tech-image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="technologies_data">
                        <h4>{data.technologies}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-12 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="buisness_column mb-4">
                <h3 className="buisness_sub_heading">Technologies</h3>
                <p>
                  Web technology involves the tools and techniques for
                  communication between devices over the Internet. It includes
                  web browsers, web servers, and languages like HTML, CSS, and
                  JavaScript, as well as protocols such as HTTP, TCP/IP, and FTP
                  to create and manage web content.
                  {webTechnologies
                    ? "The web browser is an application software to explore www (World Wide Web). It provides an interface between the server and the client and requests to the server for web documents and services."
                    : ""}
                </p>
                <button
                  type="text"
                  className="buisness_button rounded-2"
                  onClick={() => setWebTechnologies(!webTechnologies)}
                >
                  {webTechnologies ? `Read Less` : `Read More`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BANNER SECTION END */}
      <section className="services_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="services_text text-center mb-5">
                <h2 className="main_heading">Our Valuable Services</h2>
              </div>
            </div>
            {servucedata.map((data, i) => (
              <div
                className="col-12 col-md-6 col-xl-4"
                data-aos={`${data.aos}`}
                data-aos-duration="2000"
                key={i}
              >
                <div className="services_column p-3 rounded-3 mb-4">
                  <div className="services_image mb-4">
                    <img
                      src={`/images/${data.images}`}
                      alt="marketing-image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="services_data text-center">
                    <h3 className="digital">{data.heading}</h3>
                    <p>{data.para}</p>
                    <button type="text" className="buisness_button rounded-2">
                      Get start{" "}
                      <img src="/images/right.svg" alt="right-image" />
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
