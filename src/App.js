import React, { useEffect, useRef, useState } from "react"; // Import React and hooks
import "./App.css"; // Import custom styles
import Slider from "react-slick"; // Import Slider component
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import { FaAngleLeft, FaAngleRight, FaArrowUp, FaBars, FaCheck, FaTimes } from "react-icons/fa"; // Import icons
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "./assets/logo.png";
import image from "./assets/service-img.png";
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

const testimonials = [
  {
    name: "Kevin G. Harrison",
    title: "CEO & Founder",
    text:
      "With a proven track record delivering result we pride ourselves on delivering cost effective calable reliable solution that not only meet your current needs but also position your business",
    image: "https://via.placeholder.com/150", // Replace with actual images
  },
  {
    name: "Kevin G. Harrison",
    title: "CEO & Founder",
    text:
      "With a proven track record delivering result we pride ourselves on delivering cost effective calable reliable solution that not only meet your current needs but also position your business",
    image: "https://via.placeholder.com/150", // Replace with actual images
  },
  {
    name: "Michael J. Heath",
    title: "Web Designer",
    text:
      "With a proven track record delivering result we pride ourselves on delivering cost effective calable reliable solution that not only meet your current needs but also position your business",
    image: "https://via.placeholder.com/150", // Replace with actual images
  },
  // Add more testimonials as needed
];


const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="testimonial-img"
      />
      <h4>{testimonial.name}</h4>
      <p>{testimonial.position}</p>
      <p>{testimonial.description}</p>
    </div>
  );
};


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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
    autoplay: true,
    autoplaySpeed: 3000, // Auto-slide every 5 seconds
  };

  const testimonials = [
    {
      name: "Kevin G. Harrison",
      icon: 'https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo2.png',
      position: "CEO & Founder",
      description: "With a proven track record delivering results, we pride ourselves on delivering cost-effective, scalable, and reliable solutions that meet your current needs while positioning your business for future growth.",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user5-B4R2ENS.jpg",
    },
    {
      name: "John Doe",
      position: "Marketing Head",
      icon: 'https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo1.png',
      description: "With a proven track record delivering results, we pride ourselves on delivering cost-effective, scalable, and reliable solutions that meet your current needs while positioning your business for future growth.",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user5-B4R2ENS.jpg",
    },
    {
      name: "Jane Smith",
      icon: 'https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo3.png',
      position: "Project Manager",
      description: "With a proven track record delivering results, we pride ourselves on delivering cost-effective, scalable, and reliable solutions that meet your current needs while positioning your business for future growth.",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user5-B4R2ENS.jpg",
    },
    {
      name: "Alice Johnson",
      position: "HR Manager",
      icon: 'https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo1.png',
      description: "With a proven track record delivering results, we pride ourselves on delivering cost-effective, scalable, and reliable solutions that meet your current needs while positioning your business for future growth.",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user5-B4R2ENS.jpg",
    },
    // Add more testimonials as needed
  ];
  const settings3 = {
    infinite: true,  // Infinite scroll
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  const blogs = [
    {
      date: "February 26, 2024",
      title: "IT Service Case Studies Accelerating Business Fly Success Tech",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Image-1-2.jpg",
      link: "#",
    },
    {
      date: "February 26, 2024",
      title: "IT Service Case Studies Accelerating Business Fly Success Tech",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Image-2-2.jpg",
      link: "#",
    },
    {
      date: "February 26, 2024",
      title: "IT Service Case Studies Accelerating Business Fly Success Tech",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Image-3-1.jpg",
      link: "#",
    },
    {
      date: "February 26, 2024",
      title: "IT Service Case Accelerating to Business Fly Success Tech",
      image: "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Image-7.jpg",
      link: "#",
      featured: true,
    },
  ];

  const sliderRef = useRef(null);

  const handleScrollToTop = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const headerBottom = document.querySelector('.header-bottom');
      if (headerBottom) {
        if (window.scrollY > 0) {
          headerBottom.style.setProperty('top', '0', 'important');
          headerBottom.style.setProperty('background-color', 'rgba(20, 22, 24, 0.91)', 'important');
          headerBottom.style.setProperty('color', '#ffffff', 'important');
        } else {
          if (window.innerWidth <= 768) {
            headerBottom.style.setProperty('top', '17%', 'important');
          } else {
            headerBottom.style.setProperty('top', '7%', 'important');
          }
          headerBottom.style.setProperty('background-color', '#FFFFFF0D', 'important');
          headerBottom.style.setProperty('color', '#ffffff', 'important');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleNav = () => setNavVisible(!isNavVisible);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="header-section" ref={sliderRef}>
        <header className="header-container">
          {/* Top Section with Address and Support */}
          <div className="header-top">
            <div className="header-address">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  146 Morgan Hill Road, Morgan PA, 15064
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  support@softchain.tech
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="header-social">
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Bottom Section with Logo, Navigation, and Search */}
          <div className="header-bottom ">
            {/* Logo */}
            <div className="header-logo-container">
              <div className="header-logo" style={{ height: 'auto', width: '200px', cursor: 'pointer' }} onClick={handleScrollToTop}>
                <img src={logo} alt="Softchain" style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={handleScrollToTop} />
              </div>
              {/* Hamburger Menu */}
              <button className="menu-toggle" onClick={toggleNav}>
                <FaBars size={24} color="#ffffff" />
              </button>
            </div>

            {/* Navigation Menu */}
            <div className={`header-nav mhm ${isNavVisible ? 'active' : ''}`}>
              <ul>
                <li><a style={{ cursor: 'pointer' }} onClick={handleScrollToTop}>HOME</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={handleScrollToAbout}>ABOUT</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={handleScrollToServices}>SERVICES</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={handleScrollToBlogs}>BLOGS</a></li>
                <li><a style={{ cursor: 'pointer' }} onClick={handleScrollToContact}>CONTACT</a></li>
              </ul>
            </div>

            {/* Phone Number and Search */}
            <div className={`display mhm ${isNavVisible ? 'displays' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="phone-number">
                <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/%EF%82%95phone.png" alt="Phone" />
                <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#ffffff' }}>+1 (412) 546-6730</p>
              </div>

              {/* Search Button */}
              <div className="header-search">
                <button className="search-toggle" onClick={toggleSearch}>
                  <i className="fas fa-search"></i>
                </button>
                {isSearchVisible && (
                  <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                  </div>
                )}
              </div>


            </div>
          </div>
        </header>
      </div>
      <div className={`header-nav-mobile ${isNavVisible ? 'active' : ''}`}>
        <div className="close-btn" onClick={() => setNavVisible(false)}>
          <FaTimes />
        </div>
        <div className="header-bottom">

          {/* Navigation Menu */}
          <div className={`header-nav`}>
            <ul>
              <li><a style={{ cursor: 'pointer' }} onClick={() => { handleScrollToTop(); setNavVisible(false); }}>HOME</a></li>
              <li><a style={{ cursor: 'pointer' }} onClick={() => { handleScrollToAbout(); setNavVisible(false); }}>ABOUT</a></li>
              <li><a style={{ cursor: 'pointer' }} onClick={() => { handleScrollToServices(); setNavVisible(false); }}>SERVICES</a></li>
              <li><a style={{ cursor: 'pointer' }} onClick={() => { handleScrollToBlogs(); setNavVisible(false); }}>BLOGS</a></li>
              <li><a style={{ cursor: 'pointer' }} onClick={() => { handleScrollToContact(); setNavVisible(false); }}>CONTACT</a></li>
            </ul>
          </div>

          {/* Phone Number and Search */}
          <div className={`display`} style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="phone-number">
              <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/%EF%82%95phone.png" alt="Phone" />
              <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#ffffff' }}>+1 (412) 546-6730</p>
            </div>

            {/* Search Button */}
            <div className="header-search">
              <button className="search-toggle" onClick={toggleSearch}>
                <i className="fas fa-search"></i>
              </button>
              {isSearchVisible && (
                <div className="search-bar">
                  <input type="text" placeholder="Search..." />
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
      <div className="slider-container" >
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
              <button className="btn" onClick={handleScrollToServices}>
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
            <div className="card  mm">
              <div className="card-content">
                <img
                  style={{ filter: 'brightness(0) saturate(100%) invert(37%) sepia(82%) saturate(1642%) hue-rotate(199deg) brightness(97%) contrast(98%)' }}
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

      <div className="section4" ref={aboutRef}>
        <div className="flex-container">
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

          {/* First Section with Image and Overlay */}
          <div className="flex-item first-section">
            <div className="image-container">
              <img
                className="main-image"
                src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/img-about-NCD53M5.jpg"
                alt="Main"
              />
            </div>
          </div>


          {/* Third Section with Counters */}
          <div className="flex-item third-section">
            <div className="experience">
              <h4>We've <span style={{ color: '#086AD8' }}>25+ Years </span> Of Experience in Tech Services</h4>
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

      <div className="section5" ref={servicesRef}>
        <div className="services-container">
          <div className="services-header">
            <h2 className="popular-services">Popular Services</h2>
            <h3 className="services-we-provide">Services We Provide</h3>
          </div>

          <div className="service-cards-container">
            <div className="service-card mm">
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span className="service-number">01</span>
                  <img
                    style={{ filter: 'brightness(0) saturate(100%) invert(37%) sepia(82%) saturate(1642%) hue-rotate(199deg) brightness(97%) contrast(98%)' }}
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Icon-1.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>UX/UI Design</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px' }}>→</span>
              </div>
            </div>

            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">02</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/self-development-3.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Web Development</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">03</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/data-management-2.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>
                  IT Management</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">04</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/planning-3.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Data Security</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">05</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/start-up-1-2.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Infrastructure Plan</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">06</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/cloud-network-2.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Firewall Advancement</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">07</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/market-share-1.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Desktop Computing</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
            <div className="service-card" style={{ color: '#22222' }}>
              <div className="service-card-inner">
                <div className="service-icon" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                  <span style={{ color: '#22222' }} className="service-number">08</span>
                  <img
                    src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/software-development-1.png"
                    alt="UX/UI Design"
                    className="service-image"
                  />
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.27)', margin: '10px 0', marginBottom: '40px', marginTop: '20px' }} />
                <h4 className="service-title" style={{ marginBottom: '10px' }}>Market research</h4>
                <p>We approached WiaTech with complex project deliver</p>
                <span className="arrow-icon" style={{ marginTop: '18px', fontSize: '26px', color: '#22222' }}>→</span>
              </div>
            </div>
          </div>

          <div className="consultation-card">
            <div className="card-container">
              <div className="images" style={{ display: "flex", alignItems: 'start' }}>
                <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user4-B4R2ENS.jpg" alt="User 4" className="image" />
                <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user3-B4R2ENS.jpg" alt="User 3" className="image" />
                <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user2-B4R2ENS.jpg" alt="User 2" className="image" />
                <img style={{ borderRadius: "50%" }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/user1-B4R2ENS.jpg" alt="User 1" className="image" />
              </div>
              <p className="title">Ready to Get <br /> Consultations to Our Expertise </p>
              <button className="read-more-btn qo-btn" style={{ marginTop: '0', fontSize: '14px' }}>
                Read More
                <FaAngleRight className="quote-icon" />
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="choose-section">
        <section className="why-choose-us">
          <div className="content-container">
            <div className="image-section">
              <img
                src={image}
                alt="Working Woman"
                className="image"
              />
            </div>
            <div className="text-section">
              <h6 style={{ color: '#086AD8' }}>Why Choose Us</h6>
              <h2>Innovative Strategies for Maximum <span style={{ color: '#086AD8' }}>SEO Impact</span></h2>
              <p>
                We are at the forefront of technological innovation, dedicated to
                providing comprehensive IT solutions that empower businesses.
              </p>
              <div className="services">
                <div className="service1">
                  <div className="icon">
                    <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Icon-3.png" alt="Robotics" />
                  </div>
                  <h4>Robotics Software</h4>
                  <p>We are a dynamic and forward-dedicated revolution</p>
                </div>
                <div className="service2">
                  <div className="icon">
                    <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/artificial-intelligence-2.png" alt="AI" />
                  </div>
                  <h4>Smart AI & Chatbots</h4>
                  <p>Passion lies in creating solutions that not only meet but exceed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

      <div className="section9">
        <div className="container">
          {/* Background Section */}
          <div className="background-section">
            <div className="text-container">
              <h1 className="heading">What We Provide</h1>
              <h3 className="subheading">We Run all kinds of IT services <br /> that vow your success</h3>
            </div>

            {/* Icon Boxes Section */}
            <div className="icon-boxes-container">
              {/* IT Consultancy Box */}
              <div className="icon-box">
                <div className="icon-box-inner">
                  <div className="icon">
                    <img
                      src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/technical-support-1.png"
                      alt="IT Consultancy"
                      className="icon-img"
                    />
                  </div>
                  <h4 className="icon-title">IT Consultancy</h4>
                  <div className="tick-icon">
                    <FaCheck />
                  </div>
                </div>
              </div>

              {/* Software Development Box */}
              <div className="icon-box mm">
                <div className="icon-box-inner">
                  <div className="icon">
                    <img
                      style={{ filter: 'brightness(0) saturate(100%) invert(37%) sepia(82%) saturate(1642%) hue-rotate(199deg) brightness(97%) contrast(98%)' }}
                      src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/layers-1.png"
                      alt="Software Development"
                      className="icon-img"
                    />
                  </div>
                  <h4 className="icon-title">Software Development</h4>
                  <div className="tick-icon">
                    <FaCheck />
                  </div>
                </div>
              </div>

              {/* Data Service Box */}
              <div className="icon-box">
                <div className="icon-box-inner">
                  <div className="icon">
                    <img
                      src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/cloud-computing-1.png"
                      alt="Data Service"
                      className="icon-img"
                    />
                  </div>
                  <h4 className="icon-title">Data Service</h4>
                  <div className="tick-icon">
                    <FaCheck />
                  </div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon-box-inner">
                  <div className="icon">
                    <img
                      src="https:\/\/themesflat.com\/wiatechkit\/wp-content\/uploads\/2024\/02\/cyber-security-1.png"
                      alt="Cyber Security Solutions"
                      className="icon-img"
                    />
                  </div>
                  <h4 className="icon-title">Cyber Security Solutions</h4>
                  <div className="tick-icon">
                    <FaCheck />
                  </div>
                </div>
              </div>
              {/* Collaborative Partnership Box */}
              <div className="icon-box">
                <div className="icon-box-inner">
                  <div className="icon">
                    <img
                      src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/collaboration-1.png"
                      alt="Collaborative Partnership"
                      className="icon-img"
                    />
                  </div>
                  <h4 className="icon-title">Collaborative Partnership</h4>
                  <div className="tick-icon">
                    <FaCheck />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="section10">
        <div className="container">
          <div className="left-container">
            <div className="image-container">
              <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/chat-2.png" alt="chat image" />
            </div>
            <p className="heading">Let’s Discuss & Start IT <br /> Consultations</p>
            <button className="cta-button">
              Let’s Talk <FaAngleRight />
            </button>
          </div>
          <div className="right-container">
            <div className="image-circular">
              <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/user3-Z32MA5F.jpg" alt="user" className="circle-image" />
              <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/user2-Z32MA5F.jpg" alt="user" className="circle-image" />
              <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/user1-Z32MA5F.jpg" alt="user" className="circle-image" />
            </div>
            <p className="clients-title">1.8 million+ Trusted Clients</p>

          </div>
        </div>
      </div>

      <div className="section11">
        <section className="testimonials-section">
          <div className="testimonials-header">
            <h2>Clients Testimonials</h2>
            <h3>Why People Say About Our <br /> Business Services</h3>
          </div>

          <div className="testimonial-carousel">
            <Slider {...settings3}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <div className="testimonial-inner">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                      <img style={{ width: '40px' }} src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/Vector-1.png" alt="quote" className="quote-icon" />
                      <img style={{ width: '140px' }} src={testimonial.icon} alt="quote" className="quote-icon" />
                    </div>
                    <hr style={{ margin: '40px 0', backgroundColor: '#ccc' }} />
                    <p className="testimonial-text">{testimonial.description}</p>
                    <div className="testimonial-info">
                      <img
                        className="testimonial-image"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-title">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      <div className="section12" ref={blogsRef}>
        <div className="blogs-header">
          <h2>Latest News & Blog
          </h2>
          <h3>Read Our Latest News & Blog
          </h3>
        </div>
        <div className="blog-grid-container">
          {/* Left Featured Blog */}
          <div className="blog-card featured">
            <img src={blogs[3].image} alt={blogs[3].title} />
            <div className="blog-content">
              <p className="blog-date">{blogs[3].date}</p>
              <h3 className="blog-title">{blogs[3].title}</h3>
              <a className="read-more" href={blogs[3].link}>
                Read More <FaAngleRight />
              </a>
            </div>
          </div>

          {/* Right Side Blogs */}
          <div className="side-blogs">
            {blogs.slice(0, 3).map((blog, index) => (
              <div className="blog-card" key={index}>
                <img src={blog.image} alt={blog.title} />
                <div className="blog-content">
                  <p className="blog-date">{blog.date}</p>
                  <h3 className="blog-title">{blog.title}</h3>
                  <a className="read-more" href={blog.link}>
                    Read More <FaAngleRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section13" ref={contactRef}>
        <section className="contact-section">
          <div className="contact-container">
            {/* Left Content */}
            <div className="contact-left">
              <div className="contact-heading">Get In Touch</div>
              <h3 className="contact-subheading">
                Don’t Hesitate To<br />Contact Us
              </h3>
              <p className="contact-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque inventore              </p>

              <div className="contact-info-container">
                <div className="contact-item">
                  <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/%EF%8F%85location-dot.png" alt="Location Icon" className="contact-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>146 Morgan Hill Road, Morgan PA, 15064</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/%EF%82%95phone-1.png" alt="Phone Icon" className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (412) 546-6730</p>
                    <p>+1 (368) 567 89 54</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/%EF%83%A0envelope.png" alt="Email Icon" className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>support@softchain.tech</p>
                    <p>www.softchain.tech</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/%EF%87%A0share-nodes.png" />
                  <div>
                    <h3>Social</h3>
                    <div className="social-icons">
                      <div><FaFacebook className="social-icon" /></div>
                      <div><FaTwitter className="social-icon" /></div>
                      <div><FaLinkedin className="social-icon" /></div>
                      <div><FaInstagram className="social-icon" /></div>
                    </div>
                  </div>


                </div>
              </div>
              <div style={{ marginTop: '30px', width: '100%', height: 'auto' }}>
                <img src="https://themesflat.com/wiatechkit/wp-content/uploads/2024/03/img-contact-YH5FNB4.jpg" alt="Map" className="map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Right Form Side */}
            <div className="contact-right">
              <h4 className="form-heading" style={{ color: 'black', textAlign: 'left', fontWeight: '500' }}>Send Us a Message</h4>

              <form className="contact-form" style={{ marginTop: '20px' }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name <span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                </div>

                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email address" />
                </div>

                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label htmlFor="website">Website <span style={{ color: 'red' }}>*</span></label>
                  <input type="url" id="website" name="website" required placeholder="Enter your website" />
                </div>

                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label htmlFor="message">Message <span style={{ color: 'red' }}>*</span></label>
                  <textarea id="message" name="message" required placeholder="Enter your message"></textarea>
                </div>

                <button className="read-more-btn" style={{ margin: '20px 0 0px 0' }} type="submit">Send Message Us <FaAngleRight /></button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="footer-section">
        <footer className="footer">
          <div className="footer-overlay">
            <div className="footer-content">
              <div className="footer-section logo">
                <div className="header-logo" style={{ height: 'auto', width: '180px', cursor: 'pointer', marginTop: '-20px' }} onClick={handleScrollToTop}>
                  <img src={logo} alt="Softchain" style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={handleScrollToTop} />
                </div>                <p className="footer-description">Sed ut persiciatis unde omnis natus voluptatem accusantium dolore</p>
                <h3 className="follow-us">Follow Us</h3>
                <div className="social-media">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="footer-section one">
                <h3>IT Services</h3>
                <ul>
                  <li><FaAngleRight /> IT Consultancy</li>
                  <li><FaAngleRight /> IT Management</li>
                  <li><FaAngleRight /> IT Supports</li>
                  <li><FaAngleRight /> Cloud Computing</li>
                  <li><FaAngleRight /> Cyber Security</li>
                </ul>
              </div>
              <div className="footer-section two">
                <h3>Support</h3>
                <ul>
                  <li><FaAngleRight /> Forum Support</li>
                  <li><FaAngleRight /> Help & FAQ</li>
                  <li><FaAngleRight /> Contact Us</li>
                  <li><FaAngleRight /> Pricing and plans</li>
                  <li><FaAngleRight /> Cookies Policy</li>
                </ul>
              </div>
              <div className="footer-section newsletter">
                <h3>Newsletter</h3>
                <p>Subscribe our newsletter to get more updates</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Email Address" />
                  <button className="read-more-btn">Sign Up <FaAngleRight /></button>
                </div>
                <p>By subscribing, you’re accept <a style={{ color: '#000', fontWeight: '600', textDecorationLine: 'none' }} href="/privacy-policy">Privacy Policy</a></p>
              </div>

              <button className="scroll-top-btn" onClick={handleScrollToTop}><FaArrowUp /></button>
            </div>
            <div className="footer-bottom">
              <div className="footer-content">
                <div className="footer-left">
                  <p>&copy; 2024 Softchain. All rights reserved.</p>
                </div>
                <div className="footer-right">
                  <a href="#">Company</a>
                  <a href="#">Support</a>
                  <a href="#">Privacy</a>
                  <a href="#">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home01Slider; // Export the component