import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  const [bgColor, setBgColor] = useState('white'); // Initially set to white

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  console.log(scrollY); 

      if (scrollY >= 900) {
        setBgColor('black');
      } else {
        setBgColor('primary');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className={`relative z-0 bg-${bgColor} transition-background`}>
          <div className='bg-hero-pattern bg-cover bg-no-repeat iimt  bg-center'>
            <Navbar />
            <Hero />
          </div>
         
          <div className="whitess"> <About /></div>
          <Works />
          <Experience />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
