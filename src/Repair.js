import React from 'react'
import './Repair.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import repair1 from './img/repair1.png'
 import repair2 from './img/repair2.png'
import repair3 from './img/repair3.png'
import quote from './img/quote.svg'
const Repair = () => {
  return (
     <>
       <div class="cta-area-0 overflow-hidden">
  <div class="cta1-bg-thumb0">
    <img src={repair1} alt=""/>
  </div>
  <div class="container">
    <div class="cta-wrap1">
        <div class="row justify-content-md-between align-items-center">
  <div class="col-lg-6 col-md-8">
    <div class="title-area mb-md-0">
 <span class="sub-title0 style2 text-white">
Contact Us
 </span>
 <h2 class="sec-title0 text-white mb-0">
    Where Engines Roar and Problems Soar
 </h2>
    </div>
  </div>
  <div class="col-md-auto">
    <div class="title-area0 mb-0  ">
        <a href="" className="btn btn-primary  btn-sm  animated-buttonn victoria-one" >
            View More
            <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right text-white" />

        </a>
    </div>
  </div>
        </div>
    </div>
  </div>
    </div>
   


   <div class="testimonial-area-1 overflow-hidden">
   <div class="container">
       <div class="row">
           <div class="col-lg-6">
               <div class="testimonial-thumb1">
<img src={repair3} alt=""/>
               </div>
           </div>
           <div class="col-lg-6">
               <div class="space">
                   <div class="title-area0">
                       <span class="sub-title0">
                           Clients testimonial
                       </span>
                       <h2 class="sec-title0 text-white" >
                           Car Repair The Best  <br/>
                           Services
                       </h2>
                   </div>

                

<div>
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
 <div class="carousel-inner">
   <div class="carousel-item active">
       <div>
           <div class="testi-card">
 <div class="testi-card_content">
<div class="testi-card-profile">
   <div class="testi-card-profile-details">
       <h4 class="testi-profile-title">
       Nafiz Bhuiyan
       </h4>
       <span class="testi-profile-desig">
   Customer
       </span>

   </div>
   <div class="quote-icon" >
       <img src={quote} />
   </div>
</div>
 
   <p class="testi-card_text">
   Roof services include repairs installations, and maintena resident commercial buildings. Expert the a technicians diagnose and ther address issues roofing mater gutter systems, and ventilation a Roof services
   </p>
   <div>
   
   <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     

   </div>

 </div>
           </div>
       </div>
   </div>
   <div class="carousel-item">
   <div>
           <div class="testi-card">
 <div class="testi-card_content">
<div class="testi-card-profile">
   <div class="testi-card-profile-details">
       <h4 class="testi-profile-title">
       Nafiz Bhuiyan
       </h4>
       <span class="testi-profile-desig">
   Customer
       </span>

   </div>
   <div class="quote-icon" >
       <img src={quote} />
   </div>
</div>
 
   <p class="testi-card_text">
   Roof services include repairs installations, and maintena resident commercial buildings. Expert the a technicians diagnose and ther address issues roofing mater gutter systems, and ventilation a Roof services
   </p>
   <div>
   
   <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     

   </div>

 </div>
           </div>
       </div>
   </div>
   <div class="carousel-item">
   <div>
           <div class="testi-card">
 <div class="testi-card_content">
<div class="testi-card-profile">
   <div class="testi-card-profile-details">
       <h4 class="testi-profile-title">
       Nafiz Bhuiyan
       </h4>
       <span class="testi-profile-desig">
   Customer
       </span>

   </div>
   <div class="quote-icon" >
       <img src={quote} />
   </div>
</div>
 
   <p class="testi-card_text">
   Roof services include repairs installations, and maintena resident commercial buildings. Expert the a technicians diagnose and ther address issues roofing mater gutter systems, and ventilation a Roof services
   </p>
   <div>
   
   <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     <FontAwesomeIcon icon={faStar} className="fas fa-star star" />
     

   </div>

 </div>
           </div>
       </div>
   </div>
 </div>
 <div class="testimonialOne arrow">


 <button   class=" carousel-control-prev  testimonialOne-button-next testimonialOne-button"   type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
   <span > 
   <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right text-white" />
   </span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button   class="testimonialOne-button-prev testimonialOne-button carousel-control-next"  type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
   <span >
   <span > 
   <FontAwesomeIcon icon={faArrowLeft} className="fas fa-arrow-left text-white" />
   </span>
   </span>
   <span class="visually-hidden">Next</span>
 </button>
 </div>
</div>
</div>




               </div>
           </div>
       </div>
   </div>
   </div>
</>
    
  )
}

export default Repair
