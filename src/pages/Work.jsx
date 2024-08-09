import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const Work = () => {
  const projects = [
    {
      name: 'Skyline School',
      imgURL: '/work/skyline.jpg',
    },
    {
      name: 'Designer Portfolio',
      imgURL: '/work/portfolio.jpg',
    },
    {
      name: 'Task Tracker',
      imgURL: '/work/task_tracker.jpg',
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
                <CarouselItem key={index} className="sm:basis-1/3">
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
