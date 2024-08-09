import React from 'react';
import Hero from './Home Components/Hero';
import Packages from './Home Components/Packages';
import FAQ from './Home Components/FAQ';
import Work from './Work';

const Home = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start snap-always">
        <Hero />
      </div>
      <div className="snap-start snap-always">
        <Packages />
      </div>
      <div className="snap-start snap-always">
        <Work />
      </div>
      <div className="snap-start pb-[10svh]">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
