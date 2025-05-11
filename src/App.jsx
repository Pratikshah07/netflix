import React from 'react'
import './index.css';
import Banner from "./Components/Banner";
import Section from "./Components/Section";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer"


import Hero from "./Components/Hero"

function App() {
  return (
    <div className="App">
      <Banner />
      <Hero />
      <Section />
      <Faq />
      <Footer />
      
      
    </div>
  );
}

export default App;
