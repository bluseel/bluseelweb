import React from 'react';

const Terms = () => {
  const allTerms = [
    {
      heading: '1. General Overview',
      description: [
        'By engaging with our services, you agree to the terms and conditions outlined here. These terms apply to all website development services provided by our company.',
      ],
    },
    {
      heading: '2. Domain and Hosting Services',
      description: [
        'Domain Fees: Domain registration and renewal fees are subject to change based on our domain provider, Porkbun. Any changes in fees will be communicated to you in advance.',
        'Hosting: We provide hosting services through AWS, Vercel, or Netlify. The choice of hosting platform will depend on the specific needs of your website.',
        'Email Hosting: Email hosting is optional and provided through Namecheap. This service is available at an additional yearly cost.',
      ],
    },
    {
      heading: '3. Payment and Renewal',
      description: [
        'Yearly Charges: Hosting, email, and domain services are subject to annual renewal fees. These fees cover the continued operation and maintenance of your website.',
        'One-Time Payments: For simple websites hosted on Vercel or Netlify without email services, you only pay the initial development cost. Apart from the recurring domain fee from Porkbun, no additional payments will be required unless you opt for additional services.',
        'Third-Party Domains: You have the option to use your own domain. In such cases, you will be responsible for any associated costs or fees.',
      ],
    },
    {
      heading: '4. Ownership and Intellectual Property',
      description: [
        'Upon completion and full payment, ownership of the website, including all associated content and design, will be transferred to you. However, we retain the right to use non-confidential portions of the work for our portfolio and promotional purposes.',
        'Any third-party software, tools, or assets used in the development of your website will be licensed under their respective terms, and you agree to adhere to those terms.',
      ],
    },
    {
      heading: '5. Liability and Indemnification',
      description: [
        'Our company will not be held liable for any damages resulting from the use or inability to use the website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
        'You agree to indemnify and hold us harmless from any claims, damages, or legal expenses arising from your use of the website or breach of these terms.',
      ],
    },
    {
      heading: '6. Termination',
      description: [
        'Either party may terminate the agreement at any time with written notice. Upon termination, any outstanding fees for services rendered will become immediately due.',
      ],
    },
    {
      heading: '7. Governing Law',
      description: [
        'These terms and conditions are governed by the laws of Province of Sindh, Pakistan. Any disputes arising from this agreement will be resolved in accordance with the laws of Province of Sindh, Pakistan.',
      ],
    },
    {
      heading: '8. Amendments',
      description: [
        'We reserve the right to amend these terms and conditions at any time. Any changes will be communicated to you, and continued use of our services will constitute acceptance of the new terms.',
      ],
    },
  ];

  return (
    <div className="pt-[12svh] font-sans sm:min-h-[88svh]">
      <div className="sm:items flex flex-col items-center justify-center">
        <h1 className="mb-6 font-anton text-3xl">TERMS AND CONDITIONS</h1>
      </div>
      <div className="px-8">
        <div>
          Welcome to Bluseel! We specialize in creating websites, and we want to
          make sure everything is clear and straightforward. We promise to be
          transparent in all our dealings and never sneak in any unfavorable
          conditions. These terms and conditions are here to ensure that both
          parties understand their rights and obligations.
        </div>

        {allTerms.map((term, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-2xl font-bold">{term.heading}</h2>
            <ul className="ml-6 list-disc">
              {term.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
