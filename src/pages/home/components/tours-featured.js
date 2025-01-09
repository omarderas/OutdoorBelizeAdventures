import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import tours1 from "../../../images/fiveBlues.jpg";
import tours2 from "../../../images/jaguar.png";
import tours3 from "../../../images/marie.png";
import tours4 from "../../../images/scarlet.jpg";
import "../../../less/animations.scss";
import { Container } from 'react-bootstrap';

const ToursMain = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsZooming(true);

    setTimeout(() => {
      setIsZooming(false);
    }, 13000);
  };

  const images = [tours1, tours2, tours3, tours4];

  return (
    <div className="tours-featured">
   <iframe
        className="youtube-iframe"
        src="https://www.youtube.com/embed/pdzR0Tv8fcQ?autoplay=1&mute=1&loop=1&playlist=pdzR0Tv8fcQ&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <span>
      {/*} <StaticImage src="../../../images/mata-rocks-bg.jpg" />*/}
       </span>
      <div className="overlay"></div>
      <div className="absolute-content">
        <h2>Welcome to Belize!</h2>
        <h1>
          Experience The Great Belize Outdoors <br />
          <span>Adventure Packages!</span>
        </h1>
        <p>
          Home to renowned Cave Tubing and Kayaking, historic Maya sites, and
          biodiverse natural wonders, <br />
          discover Belize with our certified tours and activities.
        </p>
        <a className="all-button" href="">View Tours</a>


      </div>
      <div className='tours-header'>
           <span>
            <h1>Our Top Outdoor Picks for you!</h1>
            <h2>Discover Belize 
            <i class="fa fa-long-arrow-right"></i>
            </h2>
            </span>
      </div>
      <div className="homeMain">
    
          <div className="row two">
            {images.map((imgSrc, index) => (
              <a
                
                className="column"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="absolute-content">
                  <h2>View Tour</h2>
                 
                  <h1>
                      {index === 0
                      ? "Five Blues Lake"
                      : index === 1
                      ? "Jaguar Preserve"
                      : index === 2
                      ? "Chocolate & Marie Sharp's"
                      : "Scarlet Macaws"}
                  </h1>
                  <a href="/coming-soon/" className='book-button' >
                      Book Today
                  </a>
                </div>
              </a>
            ))}
          </div>

          {/* Expanded Image Section */}
          <div className="expanded-container">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className={`background-image ${
                  index === hoveredIndex ? "active zoom-animation" : ""
                }`}
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ToursMain;