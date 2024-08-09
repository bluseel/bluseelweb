import React from 'react';

const PackagesPage = () => {
  // Define the data for all features
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
        <h1 className="mb-6 font-anton text-3xl">CONTACT US</h1>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-[200]">
        <div className="grid grid-cols-4">
          <div className="bg-white p-4 text-center text-white">
            {/* Empty header */}
          </div>
          <div className="rounded-tl-2xl border-r-[1px] bg-primary p-4 text-center text-white">
            Influencer
          </div>
          <div className="border-r-[1px] bg-primary p-4 text-center text-white">
            Startup
          </div>
          <div className="rounded-tr-2xl bg-primary p-4 text-center text-white">
            Business
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative z-[150] mb-4 grid grid-cols-4">
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
                className={`flex place-content-center items-center border border-gray-300 p-4 text-center text-primary ${value === '✔' ? 'font-bold' : ''}`}
              >
                {value}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
