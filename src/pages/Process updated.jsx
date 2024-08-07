import React from 'react';

const Process = () => {
  const allProcedures = [
    {
      heading: 'REQUIREMENTS GATHERING',
      description:
        'Requirement gathering is the first and most critical phase of our web development process. It involves understanding the client’s needs, objectives, and expectations. We engage in detailed discussions with our clients to ensure that we have a clear and comprehensive understanding of the project requirements.',
      contentPoints: [],
      imgURL: '/requirement.jpg',
    },
    {
      heading: 'WIREFRAME',
      description:
        'Wireframing is the blueprint phase of web development where we sketch the skeletal framework of the website. This stage focuses on the structure and layout without delving into design details. It allows us to map out the user journey and ensure intuitive navigation.',
      contentPoints: [],
      imgURL: '/wireframe.svg',
    },
    {
      heading: 'DESIGN',
      description:
        'The website design phase involves creating the visual aspect of the website. Our designers bring the wireframes to life by incorporating brand colors, typography, images, and other graphical elements to create a visually appealing and cohesive design.',
      contentPoints: [],
      imgURL: '/design.svg',
    },
    {
      heading: 'DEVELOP',
      description:
        'The coding phase involves turning the finalized design into a fully functional website. Our developers use the latest technologies and coding standards to ensure the website is fast, secure, and scalable.',
      contentPoints: [],
      imgURL: '/design.svg',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2">
        <header className="col-span-1 px-3 py-2 pt-[12svh] text-center font-anton text-4xl sm:col-span-2 sm:px-2 sm:text-3xl">
          PROCESS OF WEB DEV
        </header>
        {allProcedures.map((step, index) => (
          <div
            className={`flex snap-start flex-col gap-4 pl-8 pr-4 pt-[2svh] sm:flex-row sm:pt-[8svh]`}
          >
            <div key={index} className="w-full text-justify">
              <div className="font-anton text-xl">
                {' '}
                {`${index + 1}.`} {step.heading}
              </div>

              <div className="text-lg leading-none tracking-normal sm:text-[1rem] sm:leading-normal sm:tracking-normal">
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
