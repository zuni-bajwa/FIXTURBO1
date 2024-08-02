import React  from 'react'
import fixturbo from './img/fixturbo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import chatt from './img/chatt.svg'
import fix from './img/fix.svg'
import './Nav.css'
import { useState,useEffect,useRef } from 'react'
 
const Nav = () => {
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > headerRef.current.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state based on initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  const [ width ,setwidth] = useState(window.innerWidth );
  const input = useRef();


  useEffect(() => {
    const handleResize = () => {
        setwidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
 
}, []); 
















     const [closee,setclose] = useState(true);
 const [ toggle,settoggle] = useState(false);
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedd, setIsCollapsedd] = useState(false);
  const [isCollapseddd, setIsCollapseddd] = useState(false);
  const [isCollapsedddd, setIsCollapsedddd] = useState(false);
  const [isCollapseddddd, setIsCollapseddddd] = useState(false);
  const [isCollapsedddddd, setIsCollapsedddddd] = useState(false);
  const [togglee , settogglee] = useState( false);

  const togglefun  = () => {
    settogglee(!togglee);
  };
   const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleMenuu = () => {
    setIsCollapsedd(!isCollapsedd);
  };
  const toggleMenuuu = () => {
    setIsCollapseddd(!isCollapseddd);
  };
  const toggleMenuuuu = () => {
    setIsCollapsedddd(!isCollapsedddd);
  };
  const toggleMenuuuuu = () => {
    setIsCollapseddddd(!isCollapseddddd);
  };
  const toggleMenuuuuuu = () => {
    setIsCollapsedddddd(!isCollapsedddddd);
  };
  const shown =() =>{
    settoggle(!toggle)
  }
   const close = () => {
    setclose(!closee);
   }
  return (
    
        <header ref={headerRef}  className={isFixed ? 'fixed-header' : ''}>

        <div class="first ">
            <div class="logo">
                <a href="#">
                    <img src={fixturbo} alt=""/>
                </a>
            </div>
        </div>
        <div class="sec">
           <nav>
            <ul class="ull">
                <div class="drop">
                    <div class="select">
                        <li className='ho'>
                            <a href='#'>
                                Home
                            </a>
                            <span class="left-icon"></span>
                            <span class="right-icon"></span>

                            
                     
                       </li>
                       
                    </div>
                    <ul class="menu container show">
                        <li>
                          <a href='#'>
                          Home 01
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 02
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 03
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 04
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 05
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 06
                          </a>
                        </li>

                    </ul>
                  

                        
                 
                </div>
                 
                <li className='ho'>
                <a href='#'>
                About Us
                </a>
               </li>



               <div class="drop">
                    <div class="select">
                        <li className='ho'>
                            <a href='#'>
                                Home
                            </a>
                            <span class="left-icon"></span>
                            <span class="right-icon"></span>

                            
                     
                       </li>
                       
                    </div>
                    <ul class="menu container show">
                        <li>
                          <a href='#'>
                          Home 01
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 02
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 03
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 04
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 05
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 06
                          </a>
                        </li>

                    </ul>
                  

                        
                 
                </div>




































                <div class="drop">
                    <div class="select">
                        <li className='ho'>
                            <a href='#'>
                               Projects
                            </a>
                            <span class="left-icon"></span>
                            <span class="right-icon"></span>

                            
                     
                       </li>
                       
                    </div>
                    <ul class="menu container show">
                        <li>
                          <a href='#'>
                          Home 01
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 02
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 03
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 04
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 05
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 06
                          </a>
                        </li>

                    </ul>
                  

                        
                 
                </div>




              
              

               
                <div class="drop">
                    <div class="select">
                        <li className='ho'>
                            <a href='#'>
                               Blog
                            </a>
                            <span class="left-icon"></span>
                            <span class="right-icon"></span>

                            
                     
                       </li>
                       
                    </div>
                    <ul class="menu container show">
                        <li>
                          <a href='#'>
                          Home 01
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 02
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 03
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 04
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 05
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 06
                          </a>
                        </li>

                    </ul>
                  

                        
                 
                </div>
                <div class="drop">
                    <div class="select">
                        <li className='ho'>
                            <a href='#'>
                                Pages
                            </a>
                            <span class="left-icon"></span>
                            <span class="right-icon"></span>

                            
                     
                       </li>
                       
                    </div>
                    <ul class="menu container show">
                        <li>
                          <a href='#'>
                          Home 01
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 02
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 03
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 04
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 05
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                          Home 06
                          </a>
                        </li>

                    </ul>
                  

                        
                 
                </div>
                <li className='ho'>
                <a href='#'>
                Contact
                </a>    
                </li>
               
             </ul>
           </nav> 
        </div>
        <div>
        {
                     window.innerWidth<1225 &&
                     <div className='navbar-right d-inline-flex'>
<button className='menu-toggle icon-btn'  onClick={togglefun}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</button>
                      </div>

         }
        </div>
        <div class="third">
        <div className='call-media-wrap'>
       
 <div>
 <img src={chatt} alt=""  />
 </div>
 <div className='body'>
    <h6 className='title  '>
   Need help?
    </h6>
    <h4 className='link  '>
    
    (307) 555-0133  
  
    </h4>
 </div>
</div>
















              
           
            
        </div>


      
         <div  className='mobile-menu-wrapper body-visible '  style={{ display: togglee? 'block' : 'none' }}  >
<div className='mobile-menu-area' >
<div className='mobile-logo'>
  <a href='#'>
    <img src={fix} />
  </a>
  <button className='menu-toggle' onClick={togglefun} >
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
  </button>
</div>


<div className='mobile-menu'>
  < ul className='offcanvas-navigation'>
   <li className='menu-item-has-children submenu-item-has-children'>
    <a href='#'>
     Home
    </a>
    <span className='mean-expand-class'  onClick={toggleMenu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapsed ? 'block' : 'none', marginLeft: '20px' }}>
        <li>
      <a href='#'>Home01</a>
        </li>

        <li>
      <a href='#'>Home02</a>
        </li>
        <li>
      <a href='#'>Home03</a>
        </li>
        <li>
      <a href='#'>Home04</a>
        </li>
        <li>
      <a href='#'>Home05</a>
        </li>
        <li>
      <a href='#'>Home06</a>
        </li>
      </ul>
   </li>



   <li className='simple'>
    < a href='#'>About</a>
   </li>


   <li className='menu-item-has-children submenu-item-has-children active'>
    <a href='#'>
    Pages
    </a>
    <span className='mean-expand-class'  onClick={toggleMenuu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapsedd ? 'block' : 'none', marginLeft: '20px' }}>

        <li>
      <a href='#'> Team Page</a>
        </li>

        <li>
      <a href='#'>Team Details</a>
        </li>
        <li>
      <a href='#'>Shop Page</a>
        </li>
        <li>
      <a href='#'>Shop Details</a>
        </li>
        <li>
      <a href='#'>Cart</a>
        </li>
        <li>
      <a href='#'>Checkout</a>
        </li>
        <li>
      <a href='#'>Wishlist</a>
        </li>
      </ul>
   </li>


   <li className='menu-item-has-children submenu-item-has-children'>
    <a href='#'>
     Project
    </a>
    <span className='mean-expand-class'  onClick={toggleMenuuu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapseddd ? 'block' : 'none', marginLeft: '20px' }} >

        <li>
      <a href='#'> Projects</a>
        </li>

        <li>
      <a href='#' >Project Details</a>
        </li>
 
      </ul>
   </li>



   <li className='menu-item-has-children submenu-item-has-children'>
    <a href='#'>
    Service
    </a>
    <span className='mean-expand-class'  onClick={toggleMenuuuu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapsedddd ? 'block' : 'none', marginLeft: '20px' }}>

        <li>
      <a href='#'> Services</a>
        </li>

        <li>
      <a href='#'> Service Detail</a>
        </li>
       
      </ul>
   </li>
   




   <li className='menu-item-has-children submenu-item-has-children'>
    <a href='#'>
    Shop
    </a>
    <span className='mean-expand-class'  onClick={toggleMenuuuuu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapseddddd ? 'block' : 'none', marginLeft: '20px' }}>

        <li>
      <a href='#'>Shop</a>
        </li>

        <li>
      <a href='#'>Shop Detail</a>
        </li>
        <li>
      <a href='#'>Cart</a>
        </li>
        <li>
      <a href='#'>Checkout</a>
        </li>
        <li>
      <a href='#'>Wishlist</a>
        </li>
       
      </ul>
   </li>


   <li className='menu-item-has-children submenu-item-has-children'>
    <a href='#'>
 Blog
    </a>
    <span className='mean-expand-class'  onClick={toggleMenuuuuuu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>+</span>
      <ul className='sub-menu submenu-class'  style={{ display: isCollapsedddddd ? 'block' : 'none', marginLeft: '20px' }}>

        <li>
      <a href='#'>Blog</a>
        </li>

        <li>
      <a href='#'>Blog Details
      </a>
        </li>
        
      </ul>
   </li>

   <li className='simple'>


    <a href='#'>
      Contact
    
    </a>
   </li>
  </ ul>
</div>
</div>
        </div>
    </header>

 
  )
}

export default Nav
