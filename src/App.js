import React, { useEffect, useState } from "react";
import "./App.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
  {
    id: "8d29a76",
    image:
      "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-USRBJHQ.jpg",
    overlay: "#00000080",
    title: "Modern & Digital\nIT Solutions For Your\nTech Business",
    subtitle: "5m+ Trusted Our Clients",
    description: "25+ Years Of Experience In Tech Services",
    shapeOne:
      "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/XMLID_1_.png",
  },
  {
    id: "9fb29d4",
    image:
      "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/img-home01-EEZPB5S.jpg",
    overlay: "#00000080",
    title: "Modern & Digital\nIT Solutions For Your\nTech Business",
    subtitle: "5m+ Trusted Our Clients",
    description: "25+ Years Of Experience In Tech Services",
    shapeOne:
      "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/XMLID_1_.png",
  },
];
const partnerLogos = [
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo4-1.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo5-1.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo6.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo7.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo8.png",
  "https://themesflat.com/wiatechkit/wp-content/uploads/2024/02/logo9.png"
];
const Home01Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className="slider-overlay"
              style={{ backgroundColor: slide.overlay }}
            ></div>
            <img
              src={slide.shapeOne}
              alt="Shape One"
              className="shape"
              style={{ left: "70%", top: "22%" }}
            />
            <div className="content">
              <h4 className="subtitle">{slide.subtitle}</h4>
              <h1
                className="title"
                dangerouslySetInnerHTML={{
                  __html: slide.title.replace(/\n/g, "<br>"),
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
        <div className="ticker-inner"> {/* <-- this handles padding */}
          <div className="ticker-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div className="ticker-item" key={index}>
                <img src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home01Slider;
