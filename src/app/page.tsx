
import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
 
 
import { ScrollArea } from '@/components/ui/scroll-area';


import React from 'react';

const HomePage = () => {
  return (
    <div>
      <ScrollArea className="h-full w-full rounded-md border p-2">
        <Navbar/>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        </ScrollArea>
    </div>
  );
};

export default HomePage;