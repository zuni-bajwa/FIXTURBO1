import React from 'react'
import './Advantage.css'
import p1 from './img/p1.png'
import p2 from './img/p2.png'
import { useState } from 'react'
import p3 from './img/p3.png'
import ScrollTrigger from 'react-scroll-trigger'
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';
import card5 from './img/card5.png';
import card6 from './img/card6.png';
import CountUp from 'react-countup'

 import p4 from './img/p4.png'
 import Slider from 'react-slick'
const Advantage = () => {
    const [count,setcount]  = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,  
            settings: {
              slidesToShow: 1,  
              slidesToScroll: 1,
              
            },
          }, 
        ],
    }
  return (
    <ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(  true)} >
    <div>
       <div class="intro-area-2 bg-overlay space-bottom" >
        <div class="face">
            <div class="container">
                <div class="row gy-4 justify-content-center" >
   <div class="col-lg-3 col-sm-6">
      <div class="face-wrap">
        <div class="thumb">
            <img src={p1} alt=""/>
        </div>
        <div class="detail">
            <h2>
                <div>
                    <span>
                    {
            count&&
          <span>  <CountUp start={0} end={3} duration={2} delay={0} />   </span>
        }
                      
                      
                      
                    </span>
                    k+
                </div>
            </h2>
            <p>
                Products In Stock
            </p>
        </div>
      </div>
   </div>
   <div class="col-lg-3 col-sm-6">
    <div class="face-wrap">
      <div class="thumb">
          <img src={p2} alt=""/>
      </div>
      <div class="detail">
          <h2>
              <div>
                  <span>
                  {
            count&&
          <span>  <CountUp start={0} end={2} duration={2} delay={0} />   </span>
        }
                  </span>
                  M+
              </div>
          </h2>
          <p>
              Products In Stock
          </p>
      </div>
    </div>
 </div>
 <div class="col-lg-3 col-sm-6">
    <div class="face-wrap">
      <div class="thumb">
          <img src={p3} alt=""/>
      </div>
      <div class="detail">
          <h2>
              <div>
                  <span>
                  {
            count&&
          <span>  <CountUp start={150} end={250} duration={2} delay={0} />   </span>
        }
                  </span>
                  k+
              </div>
          </h2>
          <p>
              Products In Stock
          </p>
      </div>
    </div>
 </div>
 <div class="col-lg-3 col-sm-6">
    <div class="face-wrap">
      <div class="thumb">
          <img src={p4} alt=""/>
      </div>
      <div class="detail">
          <h2>
              <div>
                  <span>
                      2
                  </span>
                  k+
              </div>
          </h2>
          <p>
              Products In Stock
          </p>
      </div>



    </div>
 </div>



   


    

                </div>
            </div>
        </div>



       
          
   


        <div class="bottom container ">
        
           <div className='  ' >
         <div >
      <div className="mt-5  ">
      <Slider {...settings}>
        {data.map((d) => (
          <div class="card slider-card " style={{ width: '336px'  }} >
            <div>
            <img src={d.img}  class="card-img-top" alt="..."  />
    
            </div>
  
  <div class="card-body flex flex-col items-center justify-center p-4 to d-flex flex-column align-items-center justify-content-center ">
    <h2 class="card-title"> {d.name}</h2>
    <p class="card-text">120 kins of automatic lights.</p>
    <a href="#" class="btn btn-primary  btn-sm  animated-buttonn victoria-one"> Shop Now</a>
  </div>
</div>



       
        ))}
      </Slider>
      </div>
      
    </div>
     </div>
   </div>










 
 

         
    </div>
</div> 
 
 </ScrollTrigger>
   
  )
};


const data = [
    {
      name: `Car Black Light`,
      img:  require('./img/card1.png'),
 
     },
    {
      name: `Car Steering Wheel`,
      img : require('./img/card2.png'),
    
     },
    {
      name: `Car Body & Engine`,
     img : require('./img/card3.png'),
     },
    {
      name: `Car Black Light`,
   img : require('./img/card4.png'),
     },
    {
      name: `Car Steering Wheel`,
   img : require('./img/card5.png'),
     },
     {
        name: `Car Body & Engine `,
      img : require('./img/card6.png'),
       },
      
  ];
export default Advantage
