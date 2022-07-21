import React from "react"
import { FaRupeeSign } from 'react-icons/fa'
import { TiTick} from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import Product from "./Product"


const Service = () => {
  return (
    <div>
     <section class="pricing py-5">
        <div class="container">
          <div class="row">
           
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Starter</h5>
                  <h6 class="card-price text-center"> <FaRupeeSign />  9999<span class="period">/month</span></h6>
                  <hr />
                  <ul class="fa-ul">
                    <li><span class="fa-li"><TiTick /></span><strong>Up to 5 Static Pages</strong></li>
                    <li><span class="fa-li"><TiTick /></span>1 week timeframe</li>
                    <li><span class="fa-li"><TiTick /></span>sliding Banner</li>
                    <li><span class="fa-li"><TiTick /></span>Custom Design</li>
                    <li><span class="fa-li"><TiTick /></span>Basic SEO</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Letter Head</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Content Writing</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span> Visiting Card (if Logo Available)</li>
                    <li><span class="fa-li"><TiTick /></span>Payment 50% Advance, 50% Before Delivery</li>
                    <li><span class="fa-li"><TiTick /></span>1 Month Support</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Hosting</li>
                  </ul>
                  <div class="d-grid">
                    <a href="/#" class="btn btn-primary text-uppercase">Button</a>
                    
                  </div>
                </div>
              </div>
            </div>
           
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Builder</h5>
                  <h6 class="card-price text-center"> <FaRupeeSign /> 12999<span class="period">/month</span></h6>
                  <hr />
                  <ul class="fa-ul">
                    <li><span class="fa-li"><TiTick /></span><strong>Up to 7 Static Pages</strong></li>
                    <li><span class="fa-li"><TiTick /></span>10 Days timeframe</li>
                    <li><span class="fa-li"><TiTick /></span>sliding Banner</li>
                    <li><span class="fa-li"><TiTick /></span>Custom Design</li>
                    <li><span class="fa-li"><TiTick /></span>Basic SEO</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Letter Head</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Content Writing</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span> Visiting Card (if Logo Available)</li>
                    <li><span class="fa-li"><TiTick /></span>Payment 50% Advance,  50% Before Delivery</li>
                    <li><span class="fa-li"><TiTick /></span>2 Month Support</li>
                    <li class="text-muted"><span class="fa-li"><ImCross /></span>Hosting</li>
                  </ul>
                  <div class="d-grid">
                    <a href="/#" class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Premium</h5>
                  <h6 class="card-price text-center"> <FaRupeeSign /> 15999<span class="period">/month</span></h6>
                  <hr />
                  <ul class="fa-ul">
                    <li><span class="fa-li"><TiTick /></span><strong>Up to 10-12 Static Pages</strong></li>
                    <li><span class="fa-li"><TiTick /></span>14 Days timeframe</li>
                    <li><span class="fa-li"><TiTick /></span>sliding Banner</li>
                    <li><span class="fa-li"><TiTick /></span>Custom Design</li>
                    <li><span class="fa-li"><TiTick /></span>Basic SEO</li>
                    <li><span class="fa-li"><TiTick /></span>Letter Head</li>
                    <li><span class="fa-li"><TiTick /></span>Content Writing</li>
                    <li><span class="fa-li"><TiTick /></span> Visiting Card (if Logo Available)</li>
                    <li><span class="fa-li"><TiTick /></span>Payment 50% Advance,  50% Before Delivery</li>
                    <li><span class="fa-li"><TiTick /></span>6 Month Support</li>
                    <li><span class="fa-li"><TiTick /></span>Hosting</li>
                  </ul>
                  <div class="d-grid">
                    <a href="/#" class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Product />
    </div>
  )
}

export default Service
