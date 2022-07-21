import React from "react"
import PositionedPopper from './contact'
import ScrollButton from './ScrollButoon';
import Navigation from "./Navigation";

const Development = () => {
  return (<>
    <Navigation/>
     <div id="case" className="section wb">
        <div className="container">
                <div className="section-title text-center">
              <h3>Development</h3>
              <br />
              <h1 style={{fontWeight:"bolder"}}>Our Services</h1>
              <p className="lead">We are specializes in website design and development services. Our web experiences are high-performing, feature-packed and digitally transformative, designed to be user-friendly,fully functional, very secure and able to scale as your enterprise grows.</p>
              <br />
            </div>

            <div className="section-title text-center">
                <h3>ERP Websites</h3>
              </div>

    <div id="cards_landscape_wrap-2">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="http://www.ssbilling.com/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i1.png" alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>Billing Project</h6>
                                    <p>SSBILLING</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="http://jvyescoverpack.com/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i2.png" alt="" />
                                </div>
                                <div className="text-container">                                    
                                    <h6>App Project</h6>
                                    <p>JVYESCOVERPACK</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="https://svrealtors.co.in/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i3.png" alt="" />
                                </div>

                                <div className="text-container">
                                    <h6>Real Estate</h6>
                                   <p>SVREALTORS</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="http://127.0.0.1:5500/rahulbilling.com">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="" alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>Hosting Project</h6>
                                   <p>RAHULBILLING</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="section-title text-center">
                <h3>Educational Websites</h3>
              </div>

    <div id="cards_landscape_wrap-2">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="https://stse.in/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i4.png" alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>Education Project</h6>
                                    <p>STSE</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="http://unitytech.co.in/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i5.png" alt="" />
                                </div>
                                <div className="text-container">                                    
                                    <h6>Institute Project</h6>
                                    <p>UNITYTECH</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
              
            </div>
        </div>
    </div>


    <div className="section-title text-center">
                <h3>Bank Websites</h3>
              </div>

    <div id="cards_landscape_wrap-2">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="https://adccbanknagar.org/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img style={{padding:"10px"}} src="images/i7.png" alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>Bank Project</h6>
                                    <p>ADCCBANKNAGAR</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
              
            </div>
        </div>
    </div>

    
    </div>
    <PositionedPopper />
    <ScrollButton />
    </div>
    </>
  )
}

export default Development
