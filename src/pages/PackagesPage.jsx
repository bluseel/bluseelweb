import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import PlanSelectForm from './Home Components/PlanSelectForm';

const PackagesPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlanClick = (plan) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  const allFeatures = [
    { name: 'Onetime Price', values: ['$400', '$900', '$1200'] },
    {
      name: 'Number of pages',
      values: [
        '2 (Main, About)',
        '5 (Main, Contact, About, Service, Privacy Policy)',
        '10 (Main, Contact, About, Service x5, Privacy Policy)',
      ],
    },
    {
      name: 'Custom Domain Name (yearly charged, first year free)',
      values: ['✔', '✔', '✔'],
    },
    { name: 'Blazingly Fast', values: ['✔', '✔', '✔'] },
    { name: 'Free Web Hosting', values: ['✔', '✔', '✔'] },
    { name: 'Accessibility ensured', values: ['✔', '✔', '✔'] },
    { name: 'Mobile friendly design', values: ['✔', '✔', '✔'] },
    { name: 'All device responsive', values: ['❌', '✔', '✔'] },
    { name: 'Website design & build amendments', values: ['❌', '2', '5'] },
    { name: 'Unique and Creative UI/UX', values: ['❌', '✔', '✔'] },
    {
      name: 'Business email (yearly charged, first year free)',
      values: ['❌', '❌', '✔'],
    },
    { name: 'Content Management System', values: ['❌', '❌', '✔'] },
    { name: '6 months free 24/7 support', values: ['❌', '❌', '✔'] },
  ];

  return (
    <div className="px-8 pt-[12svh] sm:min-h-[88svh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 font-anton text-3xl">AFFORDABLE PACKAGES</h1>
      </div>

      {/* header */}
      <div className="sticky top-[12svh] z-10">
        <div className="grid grid-cols-4">
          <div className="relative bg-white p-4 text-center text-white">
            <p className="absolute bottom-0 left-0 font-bold text-black">
              Currency: USD
            </p>
          </div>
          <div className="flex flex-col items-center rounded-tl-2xl border-r-[1px] bg-primary p-4 text-center text-white">
            <span className="text-sm sm:text-xl"> Presence</span>
            <button
              className="w-fit rounded-sm border-2 border-secondary px-2 py-1 text-[0.7rem] leading-3 text-secondary transition-all hover:bg-secondary hover:text-black sm:leading-none"
              onClick={() => handleSelectPlanClick('presence')}
            >
              Select Plan
            </button>
          </div>
          <div className="flex flex-col items-center border-r-[1px] bg-primary p-4 text-center text-white">
            <span className="text-sm sm:text-xl"> Startup</span>
            <button
              className="w-fit rounded-sm border-2 border-secondary px-2 py-1 text-[0.7rem] leading-3 text-secondary transition-all hover:bg-secondary hover:text-black sm:leading-none"
              onClick={() => handleSelectPlanClick('startup')}
            >
              Select Plan
            </button>
          </div>
          <div className="flex flex-col items-center rounded-tr-2xl bg-primary p-4 text-center text-white">
            <span className="text-sm sm:text-xl"> Business</span>
            <button
              className="w-fit rounded-sm border-2 border-secondary px-2 py-1 text-[0.7rem] leading-3 text-secondary transition-all hover:bg-secondary hover:text-black sm:leading-none"
              onClick={() => handleSelectPlanClick('business')}
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="relative mb-4 grid grid-cols-4 text-[0.7rem] sm:text-sm">
        {allFeatures.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center border-b-[1px] bg-primary p-4 font-bold text-white ${
                index === 0
                  ? 'rounded-tl-xl'
                  : index === allFeatures.length - 1
                    ? 'rounded-bl-xl'
                    : ''
              }`}
            >
              {feature.name}
            </div>
            {feature.values.map((value, i) => (
              <div
                key={i}
                className={`flex place-content-center items-center border border-gray-300 p-4 text-center text-primary ${
                  value === '✔' ? 'font-bold' : ''
                }`}
              >
                {value}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Your Plan</DialogTitle>
          </DialogHeader>
          <PlanSelectForm selectedPackage={selectedPlan} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PackagesPage;
