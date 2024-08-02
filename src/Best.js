import React from 'react'
import wheel1 from './img/wheel1.svg'
import wheel2 from './img/wheel2.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import  car from './img/car.png'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import the specific icon you need
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import './Best.css'
const Best = () => {
  return (
    <div className='best'>
        <div>
        <div class="about1-shape-img shape-mockup">
            <img src={wheel1} alt="" class="spin1 up"/>
            <img src={wheel2} alt="" class="spin2 down"/>
        </div>
        <div class="container">
            <div class="row gx-60 align-items-center flex-row-reverse">
    <div class="col-xl-7 text-xl-center  ">
   <div class="about-thumb3 mb-40 mb-xl-0">
   <div class="about-img-1" >
<img src={car} alt=""/>
   </div>
   </div>
    </div>
    <div class="col-xl-5" >
  <div class="about-content-wrap">
<div class="title-area me-xl-5 mb-30">
<span class="sub-title2">
   
    Know About Us
</span>
<h2 class="sec-title2">
    Our Best <br /> Advantages
</h2>
<p class="sec-text1">
    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce
</p>






</div>
<div class="row gy-4 justify-content-md-between justify-content-end align-items-center flex-row-reverse " >
 <div class="col-md-auto">
 <div class="checklist style2 sec-text1">
  <ul>
   
    <li>

    <FontAwesomeIcon icon={faCheckDouble}  className='check sec-text'/>
        
       Low Price Gurantee
       
      
    </li>
  
    <li>
       
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
        Trained Technicians
    </li>
    <li>
       
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
        Life-Time Warranty
     </li>
    <li>
        
       
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/> 
        Automated testing lanes
    </li>
    
  
  </ul>
 </div>
 </div>
 <div class="col-md-auto col-lg-6">
   <div class="checklist style2">
    <ul>
   
        <li>
           
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
            Quick Service Times
        </li>
      
        <li>
            
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
            Free Trade Appraisal
        </li>
        <li>
           
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
            Genuine spare parts
          </li>
        <li>
            
    <FontAwesomeIcon icon={faCheckDouble}  className='check'/>
            Unbeatable savings!
         </li>
        
      
      </ul>
   </div>
 </div>
</div>
<div class="btn-wrap mt-40">
<a href="#" class="btn  btn-sm  animated-button victoria-one ">
    Read More 
    <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-left text-white" />

</a>
</div>
  </div>
    </div>
            </div> 
        </div>
    </div>
    </div>
  )
}

export default Best
