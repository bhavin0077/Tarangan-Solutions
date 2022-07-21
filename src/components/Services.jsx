import React from "react";
import Fade from "react-reveal/Fade";
import PositionedPopper from "./contact";
import Navigation from "./Navigation";

// import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
    <Navigation/>
      <div className="body" style={{textAlign:'center', marginTop:'20px'}}>

        <div className="section" id="home">
          <div className="container">
            <div className="header-wrapper">
              <Fade bottom>
                <h2>CHECK OUT OUR BEAUTIFULL WORK</h2>
              </Fade>
              <Fade bottom cascade>
                <div className="heading-wrapper">
                  <h1>Our Portfolio</h1>
                </div>
              </Fade>
              <Fade bottom>
                <p>
                  We offer unlimited solutions to all your business needs. in
                  the installation package we prepare search engine
                  optimization, social media support, we provide corporate
                  identity and graphic design services.
                </p>
              </Fade>
              <Fade bottom>
                <h1 className="h1">
                  <a href="/Development">Development</a>
                </h1>
              </Fade>
              <Fade bottom>
                <p>
                  We Are Best Web Development Company in India. Simply put, web
                  development is designing & developing a website, which
                  includes building, creating, and maintaining the website for
                  World Wide Web. Website development consists of designing web
                  pages that display information about you, your products, and
                  the information which you would like to showcase. Websites
                  aren’t just about content but it also includes images, videos,
                  and creative designs. It has a different range and various
                  standards depending on one’s need. It can be simple and
                  informative which is called static. Static websites remain the
                  same for all the visitors. Whereas if it changes as per
                  visitors, it will be counted as a dynamic website. As there
                  are different languages, there also are different platforms to
                  work for developing a website. Since, web development is in
                  great boom today, deciding to have a website and planning it
                  according to customer needs is generally the first step
                  towards “brand presence”. The conclusion is: Web development
                  is a main key factor for establishing brand presence and it is
                  generally designed & developed to reach a wide range of
                  customers. This brings to the point that website includes all
                  the necessary information put in the fancy and right format to
                  captivate and engage more customers into your business.
                </p>
              </Fade>
              <Fade bottom>
                <h1 className="h1">
                  <a href="/Digital">Digital</a>
                </h1>
              </Fade>
              <Fade bottom>
                <p>
                  We Are Best Social Media Marketing Company in India. Social
                  Media Marketing (SMM), Email Marketing, Marketing Automation,
                  Digital Advertising, Content Marketing, Search Engine
                  Optimization (SEO), Search Engine Marketing (SEM). The purpose
                  for our choice of Digital Marketing is to assist your business
                  with giving an ordinary progression of new traffic, leads,
                  posting, and deals for your business by contacting individuals
                  searching for your items and administrations. Without anyone
                  else, web marketing is the way toward marketing your business
                  online to planned leads and highesteem purchasers.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <PositionedPopper />
      </div>
    </>
  );
};


export default Services;
