import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularExhibits from '../components/PopularExhibits';
import MuseumCategories from '../components/MuseumCategories';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <MuseumCategories />
      <PopularExhibits />
      <Contact/>
    </>
  );
};

export default Home;