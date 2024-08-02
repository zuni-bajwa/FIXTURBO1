import React,{useState,useEffect} from 'react'
import phonesss from './img/phonesss.png'
import money from './img/money.png'
import money1 from './img/money1.png'
import free from './img/free.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import  image from './img/image.png'
import './Hero.css'
 const Hero = () => {
  const [index, setIndex] = useState(0);
    const classes = ['image1', 'image2'];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % classes.length);
   
    },5000);  

    return () => clearInterval(interval);
  }, [classes.length]);
 

 
 
  return (
   
    <div  className='index'>
 <div  className={`slideshow hero changing-img  ${classes[index]}`}>
        <div>
       
        <div class="container ">
            <div class="row gx-60 align-items-center flex-row-reverse  ">
    <div class="col-xl-7 text-xl-center content1 side ">
   <div class="about-thumb3 mb-40 mb-xl-0">

    <div className='pulse'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>


    </div>
     </div>
    </div>
    <div class="col-xl-5" >
  <div class="about-content-wrap">
<div class="title-area1 me-xl-5 mb-30 text-white ">
 
  <span className='text-white content1'>
    
    <img src={image} />
   <p className='text-white'>
   Welcome Fixturbo 
    </p>  
  </span>
   <div className='content1'>
   <h2 class=" text-white sec-title  ">
  
  </h2>
   <p class=" sec-text1 text-white ">
      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce
  </p>
   </div>
   
    
 
  
  
  





</div>
 
<div class="btn-wrap mt-40 btn-group content1 ">
<a href="#" class="btn btn-primary  btn-sm  animated-buttonn victoria-one ">Learn More

</a>


 
<div className='call-media-wrap'>
 <div className='icon'>
 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_272_696)">
<path d="M12.625 0C5.375 0 0 2.875 0 6.25V7.125C0 8 0.75 8.625 1.625 8.75H4.875C6 8.75 6.625 7.375 6.25 6.25C5.625 5.375 6.25 4.125 7.25 3.875C10.75 3.125 14.25 3.125 17.875 3.875C19 4.125 19.5 5.25 18.875 6.25C18.5 7.375 19.125 8.625 20.25 8.75H23.5C24.375 8.75 25.125 8 25.125 7.125V6.25C25 2.75 19.5 0 12.625 0Z" fill="white"></path>
<path d="M19.125 9.375C18.875 9 18.5 8.75 18 8.75H16.25V6.875C16.25 6.5 16 6.25 15.625 6.25H14.375C14 6.25 13.75 6.5 13.75 6.875V8.75H11.25V6.875C11.25 6.5 11 6.25 10.625 6.25H9.375C9 6.25 8.75 6.5 8.75 6.875V8.75H7C6.5 8.75 6.125 9 5.875 9.375C4 12.625 1.25 16.75 1.25 23.75C1.25 24.375 1.75 25 2.5 25H22.5C23.25 25 23.75 24.375 23.75 23.75C23.75 16.75 20.875 12.375 19.125 9.375ZM12.5 22.5C9.75 22.5 7.5 20.25 7.5 17.5C7.5 14.75 9.75 12.5 12.5 12.5C15.25 12.5 17.5 14.75 17.5 17.5C17.5 20.25 15.25 22.5 12.5 22.5Z" fill="white"></path>
<path d="M12.5 20C13.8807 20 15 18.8807 15 17.5C15 16.1193 13.8807 15 12.5 15C11.1193 15 10 16.1193 10 17.5C10 18.8807 11.1193 20 12.5 20Z" fill="white"></path>
</g>
<defs>
<clipPath id="clip0_272_696">
<rect width="25" height="25" fill="white"></rect>
</clipPath>
</defs>
</svg>
 </div>
 <div className='body'>
    <h6 className='title text-white'>
    Requesting A Call:
    </h6>
    <h4 className='link text-white'>
    
   (629) 555-0129
  
    </h4>
 </div>
</div>
 </div>
  </div>




    </div>




    
            </div> 
        </div>
    </div>

   
   
   




   
   
    </div>
    <div class="feature-area-1">
    <div  class=" container">
            <div className='row gy-4 justify-content-center '>
                <div className='col-xl-4'>
                <div class="card1">
         <div class="card-content1">
            <div class="icon1 card-left1 ">
            <img src={free} />
 
            </div>
            <div class="text media-body">
                <h4>Free Delivery</h4>
                <p>Home delivery, free shipping!</p>
            </div>
        </div>
    </div>


 




     
                </div>

                <div className='col-xl-4'>
                <div class="card1">
         <div class="card-content1">
            <div class="icon1 card-left1">
            <img src={money}   />
 
            </div>
            <div class="text media-body">
                <h4>Free Delivery</h4>
                <p>Home delivery, free shipping!</p>
            </div>
        </div>
    </div>


 




     
                </div>




                <div className='col-xl-4'>
                <div class="card1">
         <div class="card-content1">
            <div class="icon1 card-left1">
            <img src={money1} />
 
            </div>
            <div class="text media-body">
                <h4>Free Delivery</h4>
                <p>Home delivery, free shipping!</p>
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

export default Hero
