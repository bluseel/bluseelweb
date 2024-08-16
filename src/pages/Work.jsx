import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const Work = () => {
  const handleClick = (src) => {
    window.open(src, '_blank');
  };

  const projects = [
    {
      name: 'Designer Portfolio',
      imgURL: '/work/portfolio.jpg',
      site: 'https://attiquesa.netlify.app/',
    },
    {
      name: 'Task Tracker',
      imgURL: '/work/task_tracker.jpg',
      site: 'https://tasktracker0.netlify.app/',
    },
    {
      name: 'Skyline School',
      imgURL: '/work/skyline.jpg',
      site: 'https://bluseel.github.io/skyline-website/',
    },
  ];

  return (
    <div className="h-[100svh] pt-[12svh]">
      <div className="flex w-full flex-col place-content-center items-center px-2">
        <header className="px-3 py-2 text-center font-anton text-2xl sm:px-2 sm:text-3xl">
          OUR WORK
        </header>
        <div className="flex place-content-center">
          <Carousel
            opts={{
              align: 'start',
              loop: 'true',
            }}
            className="h-fit"
          >
            <CarouselContent className="flex w-full sm:min-w-[900px]">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="relative sm:basis-1/3">
                  <button
                    onClick={() => handleClick(project.site)}
                    className="absolute right-0 top-0 mr-1 mt-1 w-10 rounded-lg bg-white/80 p-2"
                  >
                    <img
                      src="/work/external.svg"
                      alt=""
                      className="h-full w-full"
                    />
                  </button>
                  <div className="h-[76svh]">
                    <img
                      src={project.imgURL}
                      alt=""
                      className="h-full w-full object-cover object-left-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-[20px] right-[60px]">
              <CarouselPrevious className="w-[45px] rounded-none bg-primary text-white hover:bg-primary/80 sm:hidden" />
              <CarouselNext className="w-[45px] rounded-none bg-primary text-white hover:bg-primary/80 sm:hidden" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Work;
