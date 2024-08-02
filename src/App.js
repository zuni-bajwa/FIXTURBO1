import React from 'react'
import Nav from './Nav'
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Last from './Last'
import Footer from './Footer'
import New from './New';
 import Repair from './Repair';
 import All from './All'
import Try1 from './Try1';
import Advantage from './Advantage';
import './App.css'
 import Moving from './Moving'
 import Haed from './Haed';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Faq from './Faq'
  
import Hero from './Hero'
import Best from './Best';
const App = () => {
  return (
    <div   >
       <Haed />
      <Nav />
      <Hero />
      <Best />
      <Advantage/>
      <Try1 />
      
      <Faq />
     
   
 
     <Moving />
     <New />
     <Repair />
     <Last />
     
    <Footer />
    <All />
   
    </div>
  )
}

export default App
