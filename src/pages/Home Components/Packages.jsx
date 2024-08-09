import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import PlanSelectForm from '../Home Components/PlanSelectForm';

const Packages = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [planeSelected, setPlaneSelected] = useState('');

  const handleSelectPlanClick = (plan) => {
    setPlaneSelected(plan);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative flex flex-col items-center pt-[10svh] md:h-[100svh]">
      <header className="max-w-[500px] px-3 py-5 text-center text-2xl sm:px-2 sm:text-3xl">
        <span className="font-anton">Low Cost</span> Packages tailored just for
        your needs
      </header>
      <a
        href="/packages"
        className="absolute right-[40px] top-[120px] rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary/80"
      >
        Compare All Packages
      </a>

      <article className="grid w-full gap-10 px-10 pb-10 md:grid-flow-col">
        <div className="border-secodary flex h-full w-full min-w-[230px] flex-col gap-2 border-2 px-3 py-2">
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            INFLUENCER
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Highly customizable linkr with an extra page for contact, about or
            services
          </div>
          <div className="flex font-anton text-xl tracking-widest sm:text-2xl">
            <div className="text-md sm:text-lg">$</div> <div>400</div>
          </div>
          <button
            className="sm:text-md w-full rounded-lg border-[1px] border-primary px-4 py-2 text-center text-sm text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleSelectPlanClick('influencer')}
          >
            Select Plan
          </button>

          <div className="text-[0.8rem]">
            <ul className="">
              <li>2 Page website</li>
              <li>Website Development</li>
              <li>Mobile responsive</li>
              <li>Custom domain name</li>
              <li>Website Hosting</li>
            </ul>
          </div>
        </div>
        {/* startup */}
        <div className="relative flex h-full w-full min-w-[230px] flex-col gap-2 border-2 border-primary px-3 py-2 shadow-md shadow-current">
          <div className="absolute -top-3 right-10 rounded-md border-2 border-primary bg-white px-2 shadow-sm shadow-current">
            POPULAR
          </div>
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            STARTUP
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Highly customizable linkr with an extra page for contact, about or
            services
          </div>
          <div className="flex font-anton text-2xl tracking-widest">
            <div className="text-md sm:text-lg">$</div> <div>900</div>
          </div>
          <button
            className="sm:text-md w-full rounded-lg border-[1px] border-none bg-primary px-4 py-2 text-center text-sm text-white transition-all hover:cursor-pointer hover:bg-primary/80 hover:text-white"
            onClick={() => handleSelectPlanClick('startup')}
          >
            Select Plan
          </button>

          <div>
            <ul className="text-[0.8rem]">
              <li>5 Page website</li>
              <li>Website Development</li>
              <li>Accessibility ensured</li>
              <li>All devices responsive</li>
              <li>2 Ammendments</li>
              <li>Custom domain name</li>
              <li>Website Hosting</li>
              <li>Unique & Creative UI</li>
            </ul>
          </div>
        </div>
        {/* buisninss */}
        <div className="border-secodary flex h-full w-full min-w-[230px] flex-col gap-[6px] border-2 px-3 py-2">
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            BUISNESS
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Highly customizable linkr with an extra page for contact, about or
            services
          </div>
          <div className="flex font-anton text-2xl tracking-widest">
            <div className="text-md sm:text-lg">$</div> <div>1200</div>
          </div>
          <button
            className="sm:text-md w-full rounded-lg border-[1px] border-primary px-4 py-2 text-center text-sm text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleSelectPlanClick('business')}
          >
            Select Plan
          </button>

          <div>
            <ul className="text-[0.8rem]">
              <li>10 Page website</li>
              <li>Website Development</li>
              <li>Website Design</li>
              <li>Accessibility ensured</li>
              <li>All devices responsive</li>
              <li>5 Ammendments</li>
              <li>Custom domain name</li>
              <li>Website Hosting</li>
              <li>Unique & Creative UI</li>
              <li>Business email address</li>
              <li>Content Management System</li>
            </ul>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Your Plan</DialogTitle>
            </DialogHeader>
            <PlanSelectForm selectedPackage={planeSelected} />
          </DialogContent>
        </Dialog>
      </article>
    </div>
  );
};

export default Packages;
