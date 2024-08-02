import React  from 'react'
 import './Haed.css'
 
  import { faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'; // Importing icons

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faLinkedin, faTwitter, faInstagram, faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
  

 
const Haed = () => {
     const [index, setIndex] = useState(0);
     const classes = ['image1', 'image2'];
   
     useEffect(() => {
       const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % classes.length);
       }, 5000); // Change every 5 seconds
   
       return () => clearInterval(interval);
     }, [classes.length]);
   
  return (
    <div  className={`top flex-row-reverse  zuni1 ${classes[index]}`}>
      <div className='container'>
 <div class="row justify-content-center justify-content-lg-between align-items-center gy-2" >
  <div class="col-auto  d-none d-lg-block" >
 <div className='nav-link'>
    <ul>
       
         <li>
         <FontAwesomeIcon icon={ faEnvelope }   className='li'/>

         <a href='#' className='ch text-white' >info@example.com</a>
        </li>
        <li>
        <FontAwesomeIcon icon={faMapMarkerAlt }   className='li'/>

             <a href='#' className='text-white'>6391 Elgin St. Celina, 10299 </a>

        </li>
        <li>
        <FontAwesomeIcon icon={faClock  }   className='li'/>

             <a href='#' className='text-white'>Sunday - Friday </a>

        </li>
    </ul>
 </div>
  </div>
  <div class="col-auto">
 <div className='nav-link ps-0'> 
    <ul>
        <li>
            <div className='social-icons'>
                <a href='#' className='icons'>
                <FontAwesomeIcon icon={faFacebook} className='side-icon ch' />

 
                </a>
                <a href='#'>
         <FontAwesomeIcon icon={faInstagram} className='side-icon ch' />
 


                
 
                </a>
                <a href='#'>
                <FontAwesomeIcon icon={faTwitter} className='side-icon ch' />

 
                </a>
                <a href='#'>
                <FontAwesomeIcon icon={faLinkedin} className='side-icon ch' />

 
                </a>
              
             </div>
        </li>
    </ul>
 </div>
  </div>
 </div>
      </div>
    </div>
  )
}

export default Haed
