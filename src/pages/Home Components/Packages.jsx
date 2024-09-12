import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="max-w-[500px] px-3 py-5 pb-[70px] text-center text-2xl sm:px-2 sm:pb-5 sm:text-3xl">
        <span className="font-anton">Low Cost</span> Packages tailored just for
        your needs
      </div>
      <Link
        to="/packages"
        className="absolute right-[25%] top-[180px] rounded-xl bg-primary px-4 py-2 text-sm text-white hover:bg-primary/80 sm:right-[40px] sm:top-[120px]"
      >
        Compare All Packages
      </Link>

      <article className="relative grid w-full gap-10 px-10 pb-10 md:grid-flow-col">
        <p className="absolute -top-5 left-10 font-bold">Currency: USD</p>

        <div className="border-secodary flex h-full w-full min-w-[230px] flex-col gap-2 border-2 px-3 py-2">
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            PRESENCE
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Kickstart your online presence with a sleek, 2-page website. Perfect
            for showcasing your essentials with full mobile responsiveness and a
            custom domain
          </div>
          <div className="flex font-anton text-xl tracking-widest sm:text-2xl">
            <div className="text-md sm:text-lg">$</div> <div>700</div>
          </div>
          <button
            className="sm:text-md w-full rounded-lg border-[1px] border-primary px-4 py-2 text-center text-sm text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleSelectPlanClick('presence')}
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
        <div className="relative flex h-full w-full min-w-[230px] flex-col gap-2 border-2 border-primary px-3 py-2 shadow-xl shadow-current">
          <div className="absolute -top-3 right-10 rounded-md border-2 border-primary bg-white px-2 shadow-sm shadow-current">
            POPULAR
          </div>
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            STARTUP
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Elevate your brand with a 5-page website designed for growth.
            Includes unique design elements, all device responsive and
            accessibility features
          </div>
          <div className="flex font-anton text-2xl tracking-widest">
            <div className="text-md sm:text-lg">$</div> <div>1400</div>
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
        <div className="border-secodary flex h-full w-full min-w-[230px] flex-col gap-2 border-2 px-3 py-2">
          <div className="font-anton text-xl tracking-widest sm:text-2xl">
            BUISNESS
          </div>
          <div className="text-[0.7rem] leading-none sm:text-[0.8rem]">
            Go big with a comprehensive 10-page website, creative design, CMS,
            and business email. Ideal for established brands needing robust
            functionality and professional touch
          </div>
          <div className="flex font-anton text-2xl tracking-widest">
            <div className="text-md sm:text-lg">$</div> <div>20000</div>
          </div>
          <button
            className="sm:text-md w-full rounded-lg border-[1px] border-primary px-4 py-2 text-center text-sm text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleSelectPlanClick('business')}
          >
            Select Plan
          </button>

          <div>
            <ul className="text-[0.8rem] leading-tight">
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
