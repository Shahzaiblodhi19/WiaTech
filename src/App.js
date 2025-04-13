import React, { useEffect, useState } from "react"; // Import React and hooks
import { PieChart } from 'react-minimal-pie-chart'; // Import PieChart component
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'; // Import CircularProgressbar and styles
import 'react-circular-progressbar/dist/styles.css'; // Import styles for CircularProgressbar
import "./App.css"; // Import custom styles
import Slider from "react-slick"; // Import Slider component
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import { FaAngleLeft, FaAngleRight, FaArrowAltCircleUp, FaArrowRight, FaStar } from "react-icons/fa"; // Import icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Define slides data
const slides = [
  {
    id: "8d29a76",
    image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-USRBJHQ.jpg",
    overlay: "#00000080",
    title: "Modern & Digital\nIT Solutions For Your\nTech Business",
    subtitle: "5m+ Trusted Our Clients",
    description: "25+ Years Of Experience In Tech Services",
    shapeOne: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/XMLID_1_.png",
  },
  {
    id: "9fb29d4",
    image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-EEZPB5S.jpg",
    overlay: "#00000080",
    title: "Modern & Digital\nIT Solutions For Your\nTech Business",
    subtitle: "5m+ Trusted Our Clients",
    description: "25+ Years Of Experience In Tech Services",
    shapeOne: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/XMLID_1_.png",
  },
];

// Define partner logos
const partnerLogos = [
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo4-1.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo5-1.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo6.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo7.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo8.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo9.png"
];

// Define services data
const services = [
  {
    title: "IT Services",
    img: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Group.png",
    color: "#086AD8",
  },
  {
    title: "Cyber  Security",
    img: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Group.png",
    color: "#222222",
  },
  {
    title: "Data Security",
    img: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Group.png",
    color: "#222222",
  },
];

const teamMembers = [
  {
    name: "George C. Anderson",
    role: "Senior Manager",
    image: "https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-KWVWDZ2.jpg",
  },
  {
    name: "Brandon D. Garcia",
    role: "IT Consultant",
    image: "https://example.com/brandon.jpg",
  },
  {
    name: "William A. Rogers",
    role: "Product Designer",
    image: "https://example.com/william.jpg",
  },
  {
    name: "Matthew R. Howard",
    role: "IT Manager",
    image: "https://example.com/matthew.jpg",
  },
];

// Define Home01Slider component
const Home01Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide index

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Effect to auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      id: "74bf9e5",
      imageUrl: "https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-ZZQ3FTA.jpg",
    },
    {
      id: "444cbdd",
      imageUrl: "https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-ZZQ3FTA.jpg",
    },
    {
      id: "5d61704",
      imageUrl: "https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-ZZQ3FTA.jpg",
    }
  ];

  const iconBoxData = {
    icon: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Content.png",
    title: "Modern Technology Advancement and Innovative Incentives",
    description: "We denounce with righteous indignation and like men who are beguiled and demoralized by the charms of pleasure of the moment.",
    buttonText: "View Details",
  };

  // Carousel settings for React Slick
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
    autoplay: true,
    autoplaySpeed: 5000, // Auto-slide every 5 seconds
  };

  return (
    <>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`} // Add active class to current slide
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }} // Set background image
          >
            <div
              className="slider-overlay"
              style={{ backgroundColor: slide.overlay }} // Set overlay color
            ></div>
            <img
              src={slide.shapeOne}
              alt="Shape One"
              className="shape"
              style={{ left: "70%", top: "22%" }} // Position shape
            />
            <div className="content">
              <h4 className="subtitle">{slide.subtitle}</h4>
              <h1
                className="title"
                dangerouslySetInnerHTML={{
                  __html: slide.title.replace(/\n/g, "<br>"), // Replace newlines with <br>
                }}
              ></h1>
              <p className="description">{slide.description}</p>
              <button className="btn">
                Explore Our Service <FaAngleRight />
              </button>
            </div>
          </div>
        ))}
        <button className="nav prev" onClick={prevSlide}>
          <FaAngleLeft />
        </button>
        <button className="nav next" onClick={nextSlide}>
          <FaAngleRight />
        </button>
      </div>

      <div className="partners-ticker-section">
        <div className="ticker-inner"> {/* Handles padding */}
          <div className="ticker-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div className="ticker-item" key={index}>
                <img src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="flex-container">
          {/* First Section */}
          <div className="flex-item">
            <div className="card">
              <div className="card-content">
                <img
                  className="card-icon"
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/effectiveness-1.png"
                  alt="Cost-effectiveness"
                />
                <h4>Cost-effectiveness</h4>
                <p>We offer affordable IT solutions that help you reduce costs and improve</p>
                <button className="btn">
                  Read More <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex-item">
            <div className="card active-card">
              <div className="card-content">
                <img
                  className="card-icon"
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/project-management-1.png"
                  alt="Innovative Technology"
                />
                <h4>Innovative Technology</h4>
                <p>We offer affordable IT solutions that help you reduce costs and improve</p>
                <button className="btn">
                  Read More <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex-item">
            <div className="card">
              <div className="card-content">
                <img
                  className="card-icon"
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/customer-satisfaction-1.png"
                  alt="Industry Expertise"
                />
                <h4>Industry Expertise</h4>
                <p>We offer affordable IT solutions that help you reduce costs and improve</p>
                <button className="btn">
                  Read More <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="flex-container">
          {/* First Section with Image and Overlay */}
          <div className="flex-item first-section">
            <div className="image-container">
              <img
                className="main-image"
                src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-KE3F9KV.jpg"
                alt="Main"
              />
              <img
                className="overlay-image"
                src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Frame.png"
                alt="Overlay"
              />
            </div>
          </div>

          {/* Second Section with Heading, Subheading, and Button */}
          <div className="flex-item second-section">
            <div className="heading-container">
              <h2 className="section-title">About Company</h2>
              <h3 className="sub-title">
                Make your life easier with help from <span className="highlight">Wiatech</span>
              </h3>
              <div className="icon-list">
                <div className="icon-item">
                  <span className="icon">✔</span>
                  <p>Professional Team Member</p>
                </div>
                <div className="icon-item">
                  <span className="icon">✔</span>
                  <p>Awards Winning IT Solutions Company</p>
                </div>
                <div className="icon-item">
                  <span className="icon">✔</span>
                  <p>Dedicated Tech Services</p>
                </div>
              </div>
              <button className="read-more-btn">Read More <FaAngleRight /></button>
            </div>
          </div>

          {/* Third Section with Counters */}
          <div className="flex-item third-section">
            <div className="experience">
              <h4>We've 25+ Years Of Experience in Tech Services</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque epsa inventore</p>
            </div>
            <div className="counter-container">
              <div className="counter">
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/costumer-1.png"
                  alt="Satisfied Customers"
                  className="counter-icon"
                />
                <h5 className="counter-number">56k+</h5>
                <p className="counter-title">Satisfied Customers</p>
              </div>
              <div className="counter">
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Icon.png"
                  alt="Projects Completed"
                  className="counter-icon"
                />
                <h5 className="counter-number">8m+</h5>
                <p className="counter-title">Project Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="services-container">
          <div className="services-header">
            <h2 className="popular-services">Popular Services</h2>
            <h3 className="services-we-provide">Services We Provide</h3>
          </div>

          <div className="service-cards-container">
            <div className="service-card active-service">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">01</span>
                </div>
                <h4 className="service-title">UX/UI Design</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Icon-1.png"
                  alt="UX/UI Design"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">02</span>
                </div>
                <h4 className="service-title">IT Management</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/2-1.png"
                  alt="IT Management"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">03</span>
                </div>
                <h4 className="service-title">Data Security</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/3.png"
                  alt="Data Security"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">04</span>
                </div>
                <h4 className="service-title">Infrastructure Plan</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/4.png"
                  alt="Infrastructure Plan"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">05</span>
                </div>
                <h4 className="service-title">Firewall Advancement</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/5.png"
                  alt="Firewall Advancement"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-number">06</span>
                </div>
                <h4 className="service-title">Desktop Computing</h4>
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/6.png"
                  alt="Desktop Computing"
                  className="service-image"
                />
              </div>
              <button className="services-btn">
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

          <div className="consultation-card">
            <div className="card-container">
              <div className="image-box">
                <img
                  src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/chat-1.png"
                  alt="Chat"
                  className="image"
                />
              </div>
              <p className="title">Get Free Consultations For Tech Solutions</p>
              <button className="quote-button">
                Get A Quote
                <FaAngleRight className="quote-icon" />
              </button>
            </div>
          </div>

          <div className="solution-card-container">
            <div className="container">
              {/* Main Row Container */}
              <div className="main-row">
                <div className="left-section">
                  <div className="heading-container">
                    <h1 className="main-heading">Best IT Solutions</h1>
                    <h3 className="sub-heading">We Prominent Truly IT Your solutions</h3>
                  </div>
                  <div className="text-editor">
                    <p>We denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire foresee the pain</p>
                  </div>
                  <div className="piecharts-container">
                    <div className="piechart-dividers">
                      <div className="piechart" style={{ fontWeight: "bold" }}>
                        <CircularProgressbar
                          value={68}
                          text="68%"
                          styles={buildStyles({
                            pathColor: "#3858e9",         // Blue
                            textColor: "#222222",
                            trailColor: "transparent",
                            textSize: "26px",
                          })}
                        />
                      </div>
                      <div className="piechart-title">Business Strategy</div>
                    </div>
                    <div className="piechart-dividers">
                      <div className="piechart" style={{ fontWeight: "bold" }}>
                        <CircularProgressbar
                          value={93}
                          text="93%"
                          styles={buildStyles({
                            pathColor: "#3858e9",         // Blue
                            textColor: "#222222",
                            trailColor: "transparent",
                            textSize: "26px",
                          })}
                        />
                      </div>
                      <div className="piechart-title">Technology Solutions</div>
                    </div>
                  </div>

                  <div className="button-container" style={{ display: "flex", alignItems: "start", gap: "20px" }}>
                    <button className="read-more-btn">Read More <FaAngleRight /></button>
                    <div className="imagess" style={{ display: "flex", alignItems: "start", gap: "24px", color: '#222222' }}>
                      <div className="images" style={{ display: "flex", alignItems: 'start' }}>
                        <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user4-B4R2ENS.jpg" alt="User 4" className="image" />
                        <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user3-B4R2ENS.jpg" alt="User 3" className="image" />
                        <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user2-B4R2ENS.jpg" alt="User 2" className="image" />
                        <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user1-B4R2ENS.jpg" alt="User 1" className="image" />
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: '400' }}>10m + Customers</h3>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                  <div className="image-container">
                    <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-YPHFSCF.jpg" alt="Main Background" />
                    <div className="experience-card">
                      <h1 className="experience-number">25 <span className="plus">+</span></h1>
                      <p className="experience-label">Years Of Experience</p>
                      <div className="underline"></div>
                      <div className="trust-row">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="star-icon" />
                        ))}
                        <span className="trust-label">Trustpoint</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
        <section className="template-wrapper">
          <div className="carousel-container" >
            <Slider {...settings} style={{ alignItems: 'center' }}>
              {services.map((service, index) => (
                <div className="template-column" key={index}>
                  <img src={service.img} alt={service.title} className="template-icon" />
                  <p className="template-title" style={{ color: service.color, textDecorationLine: service.color === '#086AD8' ? 'underline' : 'none' }}>
                    {service.title}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      <div className="section7">
        <div className="team-section">
          <div className="headings-container">
            <h2 className="subtitle">Meet Our Team</h2>
            <h1 className="main-heading">
              We’ve Exclusive Team <br /> member <span>Meet our <br /> Professionals</span>
            </h1>
          </div>
          <div className="team-list">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={member.id}>
                <div className="team-member-inner" style={{ display: 'flex', alignItems: 'start', gap: '50px' }}>
                  <span className="member-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="member-info">
                    <div className="member-name-role">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="member-btn1" style={{ marginLeft: 'auto' }}>
                  <button className="btn member-btn1">
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="team-container">
            <div className="main-profile">
              <img
                src="https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-KWVWDZ2.jpg"
                alt="Main profile"
                className="profile-image"
              />
            </div>
            <div className="other-profiles">
              <div className="profile">
                <img
                  src="https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-N26K5AN.jpg"
                  alt="Profile 1"
                  className="profile-image"
                />
              </div>
              <div className="profile">
                <img
                  src="https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-6HS2BDU.jpg"
                  alt="Profile 2"
                  className="profile-image"
                />
              </div>
              <div className="profile">
                <img
                  src="https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/img-home01-2VZW3JGC.jpg"
                  alt="Profile 3"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section8">
        <div className="container">
          {/* Carousel Section */}
          <div className="carousel-container">
            <Slider {...settings2}> {/* React Slick Slider Component */}
              {carouselData.map((data, index) => (
                <div className="carousel-item" key={data.id}>
                  <img
                    src={data.imageUrl}
                    alt={`Carousel ${index + 1}`}
                    className="carousel-image"
                  />
                  <div className="icon-box-container">
                    <div className="icon-box-content">
                      <img src={iconBoxData.icon} alt="Icon" className="icon-box-image" />
                      <h2 className="icon-box-title">{iconBoxData.title}</h2>
                      <p className="icon-box-description">{iconBoxData.description}</p>
                      <button className="read-more-btn">{iconBoxData.buttonText} <FaAngleRight /></button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Icon Box Section */}

        </div>
      </div>
    </>
  );
};

export default Home01Slider; // Export the component