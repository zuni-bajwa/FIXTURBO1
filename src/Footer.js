import React from 'react'
import { faLinkedin, faTwitter, faInstagram, faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fixturbo from './img/fixturbo.jpg'


import './Footer.css'
 const Footer = () => {
  return (
    <div>
        <div class="container">
        <div class="fotter-top-1 bg-theme">
            <div class="logo">
                <a href="#">
                    <img src={fixturbo} alt=""/>
                </a>
            </div>

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
               <div class="social-btn">
                <a href="#">
                <FontAwesomeIcon icon={ faFacebook  }   className='li'/>
   
                </a>
                <a href="#">
                <FontAwesomeIcon icon={ faFacebook  }   className='li'/>
   
                </a>
                <a href="#">
                <FontAwesomeIcon icon={ faFacebook  }   className='li'/>
   
                </a>
               </div>
               
        </div>
    </div>



    <div className='footer'>
    


      <footer>

    <div className='container '>
    <div className='row'>
     
<div className='col-md-12 part2'>
                                <div className='row'>
                                    <div className='col '>
                                        <h3 className='img1'> </h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0 text-white">
                                            <li>  <i class="fab fa-facebook"></i>            Facebook </li>
                                            <li>< a to="#"> <i class="fab fa-instagram"></i> Instagram 
                                            </ a></li>
                                            <li>< a to="#"> <i class="fab fa-youtube"></i>  Youtube
                                            </ a></li>
                                            <li>< a > <i class="fab fa-twitter"></i>  Twitter
                                            </ a></li>
                                            <li>
                                                < a to="#">
                                                 <i class="fab fa-linkedin"></i>  Linkedin
                                                    </ a> 
                                        
                                            </li>
                                         </ul>
                                    </div>

                                    <div className='col'>
                                        <h3> </h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0 text-white">
                                        <li>< a to="#">Low price</ a> </li>
                                      <li>  < a to="#">Low price</ a> </li>  
                                     <li>  < a to="#">Low price</ a> </li>  
                                 <li>  < a to="#">Low price</ a> 
                                  </li>  
                                                  </ul>
                                    </div>


                              


                                    <div className='col'>
                                        <h3> </h3>
                                        <ul class="footer-list  mb-sm-5 mb-md- text-white">
                                            <li>< a to="#">Low price</ a></li>
                                            <li>< a to="#">Low price</ a></li>
                                            <li>< a to="#">Low price</ a></li>
                                            <li>< a to="#">Low price</ a></li>
                                            <li>< a to="#">Low price</ a></li>
                                         </ul>
                                    </div>





                                    <div className='col'>
                                        <h3> </h3>

        <div class="widget footer-widget widget-newsletter">
 <h3 class="widget_title text-white">
Get In Touch
 </h3>
 <p class="footer-text mb-50 text-white">
 Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
 </p>
 <form class="newsletter-form">
  <div class="form-group">
    <input type='text' className='form-control'/>
  </div>
  
 </form>
        </div>
                                       
                                    </div>
                                </div>
                            </div>
 
    </div>
    </div>
    <div className='copyright-wrap'>
  <div className='container'>
    <div class="row gy-3 justify-content-md-between justify-content-center">
  <div class="col-auto align-self-center">
    <p class="copyright-text text-center text-white">
       <a href='#'>Fixturbo</a>
       2024 | All Rights Reserved
    </p>
  </div>
  <div className='col-auto'>
 <div className='footer-links'>
 <a href='#' className='text-white'> Term & Condition</a>
 <a href='#' className='text-white'> Privacy & Policy</a>
 <a href='#' className='text-white'> Contact Us</a>
 </div>
  </div>
    </div>
  </div>
 </div>
</footer>
 

 
    </div>
    </div>
  )
}

export default Footer
