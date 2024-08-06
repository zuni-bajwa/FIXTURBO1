import React from 'react'
import {useState,useEffect} from 'react'
 import CountUp from 'react-countup'
 import ScrollTrigger from 'react-scroll-trigger'
import './Faq.css'
import  f1 from './img/f1.svg'
import  f2 from './img/f2.png'
import  f3 from './img/f3.png'

 const Faq = () => {
    const [count,setcount] = useState(false);
    
  
  
  return (
    
    <div  >
         <ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(true)} />
    <div class="faq-area-2 space">
        <div className='container'>
            <div className="row gx-60 flex-row-reverse ">
<div className="col-xl-6">
  <div className="faq-thumb2  mb-xl-0 mb-50">
<div class="about-counter-grid jump d-flex align-items-center justify-content-center" >
    <img src={ f1} />
    <div className='media-right'>
 <h3 class="about-counter">
    <div>
        <span className='counter-number'>
  
        {
            count&&
          <span>  <CountUp start={150} end={250} duration={2} delay={0} />   </span>
        }
      
            +
        </span>
    </div>
 </h3>
  <h4 class="about-counter-text" >
  Services we provide
  </h4>
    </div>
</div>
<img src={ f2}  />
  </div>
</div>


<div className='col-xl-6 sidee'>
    <div className='title-area'>
 <span className='sub-title'>
 ask anything
 </span>
 <h2 className='sec-title1'>
 Empowering businesses 
 <br />
 For A Brighter Future
 <img className='title-bg-shape' src={ f3}  />
 </h2>
    </div>
    <div class="accordion-area accordion">
        <div class="accordion-card style2 active" >
            <div class="accordion-header">
                <div className='faq1'>
                <button class="accordion-button collapsed" type='button' data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">

                    What is the purpose of a business plan?
                    </button>
                </div>
                <div class="accordion-collapse collapse show" id='collapse-1' aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion" >

                    <div class="accordion-body">
                        <p className='faq-text'>
                        Some essential steps to start a business include conducting market research, creating Some essential steps to start a business.
                        </p>
                    </div>
                </div>
            </div>


         
                
          



           


        </div>


        <div class="accordion-card style2 active" >
            <div class="accordion-header">
                <div className='faq1'>
                <button class="accordion-button collapsed" type='button' data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                     How can I register my business name? 
                    </button>
                </div>
                <div class="accordion-collapse collapse show" id='collapse-2' aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion" >

                    <div class="accordion-body">
                        <p className='faq-text'>
                        Some essential steps to start a business include conducting market research, creating Some essential steps to start a business.
                        </p>
                    </div>
                </div>
            </div>


         
                
          



           


        </div>
        <div class="accordion-card style2 active" >
            <div class="accordion-header">
                <div className='faq1'>
                <button class="accordion-button collapsed" type='button' data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">

                    How can I protect my intellectual property?
                    </button>
                </div>
                <div class="accordion-collapse collapse show" id='collapse-3' aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion" >

                    <div class="accordion-body">
                        <p className='faq-text'>
                        Some essential steps to start a business include conducting market research, creating Some essential steps to start a business.
                        </p>
                    </div>
                </div>
            </div>


         
                
          



           


        </div>

    </div>

</div>

            </div>
        </div>
    </div>



    <ScrollTrigger/>
    </div>
    
  )
}

export default Faq
