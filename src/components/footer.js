import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";

import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";


     

const Footer = () => {
	return (
    <div className="footer">
        
        <div className="footer-featured">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Why Outdoor Belize Adventures?</h1>
                        <p>We’re not just another tour company—we’re your local insiders. Packed with years of knowledge, we’ll take you beyond the tourist spots, into the hidden corners of Belize that only locals know. Whether it’s a secret cave, a jungle trail, or a tucked-away river bend, we’ll show you the Belize most never get to see—and we do it at the best rates. Authentic adventures start here!</p>
                        <a href="" class="all-button">Read More</a>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <span>
                                   <i class="fa fa-certificate"></i>
                                    <h3>Certified and Secure</h3>
                                    <p>With our Gold Standard certification and specialized insurance, you can explore Belize’s wonders with total peace of mind.</p>
                                </span>
                            </div>
                            <div className="col-sm-6">
                               <span>
                                    <i class="fa fa-tag"></i>
                                    <h3>Best Price</h3>
                                    <p>We promise the best price guaranteed! Unforgettable experiences at unbeatable rates that’s our commitment to you.</p>
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6">
                                <span>
                                    <i class="fa fa-graduation-cap"></i>
                                    <h3>Certified Guides</h3>
                                    <p>With local expertise and a passion for sharing Belize’s hidden gems, they’ll make your adventure both exciting and unforgettable.</p>
                                </span>
                            </div>
                            <div className="col-sm-6">
                                <span>
                                    <i class="fa fa-bus"></i>
                                    <h3>Pickup & Drop off</h3>
                                    <p> Our reliable shuttle services ensures a comfortable and hassle-free ride, whether you’re heading to your next adventure or back to relax.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="wrapper">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a className="brand" title="" href="/">  
                <StaticImage src="../images/outdoor-logo.png" quality={60} formats={["auto", "webp", "avif"]} />
                <p>Outdoor Belize Adventures can make your Belize stay a truly memorable adventure! We offer a true taste of the Great Belizean Outdoors. Allow us to hook you up with some real Belizean Experince that will not disappoint you!</p>
                </a>
               
                    <ul className="social">
                           
                                <li id="badges">
                                    <a href="">
                                        <StaticImage src="../images/badge.png" />
                                    </a>
                                    <a href="">
                                        <StaticImage src="../images/badge2.png" />
                                    </a>
                                </li>
                            
                    </ul>
                </div>
            </div>

            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Reach Us</h1>
                    <p>
                        Tel:
                   
                     <a href=""> +(501) 625 3869</a>
                    </p>
                    <p>
                        Email:
                    
                    <a href=""> info@outdoorbelizeadventures.com</a>
                    </p>
                    <p>
                        Hours:
                   
                    <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                    </p>
                    <p id="last-item">
                    
                      <a href="" >
                         Cave Tubing
                      </a><br />
                      <a href="" >
                         7 Mile Cave Kayaking
                      </a><br />
                      <a href="" >
                         Crystal Cave
                      </a><br />
                      <a href="" >
                         Jungle Zipline
                      </a><br />
                      <a href="">
                        Marie Sharps & Chocolate Tour
                      </a>
                    </p>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975992.9347328689!2d-88.56725563322271!3d17.14721635395281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c5b3ec112faf9%3A0xf64a8a4d3f1ee34e!2sBelize!5e0!3m2!1sen!2sbz!4v1736399088325!5m2!1sen!2sbz" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       
                </div>
            </div>

        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Outdoor Belize Adventures. All Rights Reserved. Belize.</p>
        </div>
        </div>
        </div>
      {/*  <div className="footer-bottom-bg">

        </div>*/}
       
	</div>
    

    );
}

export default Footer;

