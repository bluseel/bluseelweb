import React from 'react';

const Process = () => {
  const allProcedures = [
    {
      heading: 'REQUIREMENTS GATHERING',
      description:
        'Requirement gathering is the first and most critical phase of our web development process. It involves understanding the client’s needs, objectives, and expectations. We engage in detailed discussions with our clients to ensure that we have a clear and comprehensive understanding of the project requirements.',
      contentPoints: [
        "Client Consultation: We begin with an initial meeting to discuss the client's vision, goals, target audience, and key functionalities they want for their website.",
        "Needs Analysis: Through questionnaires and interviews, we gather detailed information on the client's preferences and requirements.",
        'Project Scope: We define the project scope, timelines, and deliverables to ensure that all stakeholders are on the same page.',
        'Documentation: We create a detailed requirement document that outlines all the collected information, serving as a roadmap for the project.',
      ],
      imgURL: '/requirement.jpg',
    },
    {
      heading: 'WIREFRAME',
      description:
        'Wireframing is the blueprint phase of web development where we sketch the skeletal framework of the website. This stage focuses on the structure and layout without delving into design details. It allows us to map out the user journey and ensure intuitive navigation.',
      contentPoints: [
        'Layout Design: We create basic wireframes that outline the placement of elements such as headers, footers, navigation menus, content sections, and call-to-action buttons.',
        'User Flow: We design wireframes to represent the user flow, ensuring that users can easily navigate through the website and find the information they need.',
        'Client Feedback: We present the wireframes to the client for review and feedback, making any necessary adjustments before proceeding.',
        'Approval: Once the wireframes are approved, we move on to the design phase.',
      ],
      imgURL: '/wireframe.svg',
    },
    {
      heading: 'DESIGN',
      description:
        'The website design phase involves creating the visual aspect of the website. Our designers bring the wireframes to life by incorporating brand colors, typography, images, and other graphical elements to create a visually appealing and cohesive design.',
      contentPoints: [
        "Visual Concepts: We develop multiple design concepts based on the approved wireframes, each reflecting the client's brand identity and aesthetic preferences.",
        'Design Mockups: Our designers create high-fidelity mockups that showcase the visual details, including colors, fonts, images, and interactive elements.',
        'Responsive Design: We ensure that the design is responsive, meaning it looks and functions perfectly on all devices, including desktops, tablets, and mobile phones.',
        'Client Review: We present the design mockups to the client for feedback and revisions, ensuring the final design meets their vision.',
        'Finalization: Once the client approves the design, we prepare the final design files and move on to the coding phase.',
      ],
      imgURL: '/design.svg',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <header className="snap-start px-3 py-2 pt-[12svh] text-center font-anton text-4xl sm:px-2 sm:text-5xl">
          PROCESS OF WEB DEV
        </header>
        {allProcedures.map((step, index) => (
          <div
            className={`flex snap-start flex-col gap-4 pl-8 pr-4 pt-[10svh] sm:flex-row sm:pt-[12svh] ${index === 2 ? 'min-h-[100svh]' : 'min-h-[80svh]'}`}
          >
            <div key={index} className="w-full text-justify">
              <div className="font-anton text-2xl">
                {' '}
                {`${index + 1}.`} {step.heading}
              </div>

              <div className="sm:text-md mb-2 text-lg leading-none tracking-normal sm:leading-normal sm:tracking-wide">
                {step.description}
              </div>
              <ul className="sm:text-md text-md mb-2 list-disc pl-5 leading-none tracking-normal sm:leading-normal sm:tracking-wide">
                {step.contentPoints.map((point, idx) => (
                  <li key={idx} className="leading-none sm:leading-normal">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex sm:w-[380px]">
              <img src={step.imgURL} alt="" className="h-fit w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
