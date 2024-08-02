 import React from 'react'
 import m1 from './img/m1.png'
 import mecanic1 from './img/mecanic1.png'
 import mecanic2 from './img/mecanic2.png'
 import icon1 from './img/icon1.svg'
 import back1 from './img/back1.svg'

 import icon2 from './img/icon2.svg'
 import hero from './img/hero.png'
 import './Try1.css'
import icon from './img/icon.svg'
 const Try1 = () => {
   return (
     <div className='service-area-1 bg-smoke overflow-hidden space-top'>
       <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-6'>
                <div className='title-area text-center'>
                    <span className='sub-title3'>
                     
                      Latest Service
                     
                      </span>
                        <h2 className='sec-title3'>

                            Professional Car Repair The Best Services

                        </h2>
                   
                </div>
            </div>
        </div>
       </div>

       <div className='container bottom-card'>
   <div className='row gy-4 justify-content-center'>
  <div className='col-lg-4 col-md-6'>
 
   <div className='service-card '>
    <div className= 'service-card_content'>
    <div className='service-card_icon'>
      <img src={icon}/> 
      
        
    
    </div>
    <h5 className='service-card_title'>
      <a href='#'>Auto Fixer</a>
    </h5>
    <p className='service-card_text'>
   A car repair is a service provided to fix any issue or damage with your.
    </p>
    <a href='#'>Read More</a>
    </div>
    <div class="service-card_img">
   <img src={m1}/>
    </div>
   </div>

   </div>

   <div className='col-lg-4 col-md-6'>
 
 <div className='service-card '>
  <div className= 'service-card_content'>
  <div className='service-card_icon'>
    <img src={icon1}/>
  </div>
  <h5 className='service-card_title'>
    <a href='#'> Mechanic Masters</a>
  </h5>
  <p className='service-card_text'>
 A car repair is a service provided to fix any issue or damage with your.
  </p>
  <a href='#'>Read More
    <i class="fas fa-arrow-right"></i>
  </a>
  </div>
  <div class="service-card_img">
 <img src={mecanic1}/>
  </div>
 </div>

 </div>

 <div className='col-lg-4 col-md-6'>
 
 <div className='service-card '>
  <div className= 'service-card_content'>
  <div className='service-card_icon'>
    <img src={icon2}/>
  </div>
  <h5 className='service-card_title'>
    <a href='#'>Drive-In Garage</a>
  </h5>
  <p className='service-card_text'>
 A car repair is a service provided to fix any issue or damage with your.
  </p>
  <a href='#'>Read More</a>
  </div>
  <div class="service-card_img">
 <img src={mecanic2}/>
  </div>
 </div>

 </div>


  </div>
   </div>
       </div>
     
   )
 }
 
 export default Try1
 