import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-[100svh] max-h-[100svh] items-center">
      <section className="flex w-full flex-col items-center gap-5 text-wrap text-center">
        <div>
          <h1 className="px-8 text-4xl leading-snug md:text-5xl lg:text-7xl">
            Building website with
            <span className="font-anton"> Time </span>and
            <span className="font-anton"> Care, </span>just
            <span className="font-anton"> #ForYou </span>
          </h1>
        </div>

        <div className="font-lucida flex w-fit flex-col items-center justify-between gap-2 text-xl font-thin sm:flex-row">
          <div className="w-[280px] rounded-lg bg-primary py-4 text-white transition-all hover:cursor-pointer hover:bg-primary/80">
            Schedule a Free Call
          </div>
          <div className="h-full w-[280px] rounded-lg border-[1px] border-primary py-4 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white">
            See Our Work
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
