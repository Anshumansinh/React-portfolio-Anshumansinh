import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Technologies from './Components/Technologies';
import Educaiton from './Components/Educaiton';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 min-h-screen w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-0 p-8 pb-0">


        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Educaiton />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App