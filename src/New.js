import React from 'react'
import person1 from './img/person1.png'
import person2 from './img/person2.png'
import { faLinkedin, faTwitter, faInstagram, faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import person3 from './img/person3.png'
import './New.css'
const New = () => {
  return (
 
       <div class="team-area-2 space">
        <div class="container">
            <div class="row justify-content-center align-items-center">
<div class="col-lg-6">
    <div class="title-area text-center">
  <span class="sub-title0">
    Team Member
  </span>
  <h2 class="sec-title0">
    Car Repair The Best Services
  </h2>
  <p class="sec-text mb-lg-5 mb-4">
    A car repair is a service provided to fix any issues or a damages with your vehicle. It a involves diagnosing the problem, repairing or replacing
  </p>
    </div>
</div>
            </div>



            <div class="row gx-30 global-carousel team-slider2">

            <div class="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
<div class="swiper-wrapper">
    <div class="swiper-slide swiper-slide-active"  >
    <div>
        <div class="team-card style2">
       <div class="team-card_img">
<img src= {person1} alt=""/>
       </div>
       <div class="team-card_content">
 <h4 class="team-card_title">
    <a href="">Darrell Steward</a>
 </h4>
 <span class="team-card_desig">Software Developer</span>
 <div class="team-social_wrap ">
<div  class="social-btn style2">
 
   <a href="">
  <FontAwesomeIcon icon={faLinkedin} className=' ' />

  </a>
  <a href="">
  <FontAwesomeIcon icon={faFacebook} className='side-icon ch' />

    </a> 
  <a href="">
  <FontAwesomeIcon icon={faInstagram} className='side-icon ch' />

   </a>
   <FontAwesomeIcon icon={faTwitter} className='side-icon ch' />

  <a href=""> 

  </a>
</div>
 </div>
       </div>
        </div>
    </div>
    </div>











    <div class="swiper-slide swiper-slide-active" >
        <div>
            <div class="team-card style2">
           <div class="team-card_img">
    <img src={person2} alt=""/>
           </div>
           <div class="team-card_content">
     <h4 class="team-card_title">
        <a href=""> Wade Warren </a>
     </h4>
     <span class="team-card_desig"> Ux Architect</span>
     <div class="team-social_wrap">
    <div class="social-btn style2">
      <a href="">linedin</a>
      <a href="">facebook</a> 
      <a href="">insta</a>
      <a href="">twitter</a>
    </div>
     </div>
           </div>
            </div>
        </div>
        </div>












        <div class="swiper-slide swiper-slide-active" >
            <div>
                <div class="team-card style2">
               <div class="team-card_img">
        <img src={person3} alt=""/>
               </div>
               <div class="team-card_content">
         <h4 class="team-card_title">
            <a href=""> Darrell Steward</a>
         </h4>
         <span class="team-card_desig">Software Developer</span>
         <div class="team-social_wrap">
        <div class="social-btn style2">
          <a href="">linedin</a>
          <a href="">facebook</a> 
          <a href="">insta</a>
          <a href="">twitter</a>
        </div>
         </div>
               </div>
                </div>
            </div>
            </div>


</div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default New
