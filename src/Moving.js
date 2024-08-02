import React from 'react'
import './Moving.css'
import moving2 from './img/moving2.svg'
import m1 from './img/m1.svg'
const Moving = () => {
  return (
    <div className='marquee'>
       <div class="bg-smoke">
        <div class="container-fluid">
            <div class="slider__marquee" >
                 <div class="marquee_mode">
                  <div class="rfm-marquee-container ">
                    <div className='rfm-marquee'>
    <div class="rfm-initial-child-container">
        <div class="rfm-child"  >
    <div class="item">
        <a href="">
            <img src= {m1} alt=""/>
            <span>
                Express Car Fix
            </span>
        </a>
      
    </div>
        </div> 


        
        


        <div class="rfm-child"  >
            <div class="item">
                <a href="">
                    <img src={moving2} alt=""/>
                    <span className='text-stroke'>
                         Car Care Clinic
                    </span>
                </a>
              
            </div>
                </div>  



                <div class="rfm-child"  >
                    <div class="item">
                        <a href="">
                            <img src={m1} alt=""/>
                            <span>
                                Express Car Fix
                            </span>
                        </a>
                      
                    </div>
                        </div>  




                        <div class="rfm-child"  >
                            <div class="item">
                                <a href="">
                                    <img src={moving2} alt=""/>
                                    <span className='text-stroke'>
                                     Car Care Clinic
                                    </span>
                                </a>
                              
                            </div>
                                </div>  




    </div>
    </div>









    <div class="rfm-marquee" >
        <div class="rfm-initial-child-container">
            <div class="rfm-child"  >
        <div class="item">
            <a href="">
                <img src={m1} alt=""/>
                <span>
                    Express Car Fix
                </span>
            </a>
          
        </div>
            </div> 
    
    
            
            
    
    
            <div class="rfm-child" >
                <div class="item">
                    <a href="">
                        <img src={moving2} alt=""/>
                        <span className='text-stroke'>
                            Car Care Clinic
                        </span>
                    </a>
                  
                </div>
                    </div>  
    
    
    
                    <div class="rfm-child" >
                        <div class="item">
                            <a href="">
                                <img src={m1} alt=""/>
                                <span>
                                    Express Car Fix
                                </span>
                            </a>
                          
                        </div>
                            </div>  
    
    
    
    
                            <div class="rfm-child" >
                                <div class="item">
                                    <a href="">
                                        <img src={moving2} alt=""/>
                                        <span className='text-stroke'>
                                        Car Care Clinic
                                        </span>
                                    </a>
                                  
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

export default Moving
