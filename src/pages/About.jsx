import React from 'react';

const About = () => {
  return (
    <div>
      <header className="col-span-1 px-3 py-2 pt-[12svh] text-center font-anton text-4xl sm:col-span-2 sm:px-2 sm:text-4xl">
        ABOUT US
      </header>
      <div className="flex flex-col gap-5 px-10">
        <div className="">
          Welcome to bluseel, where creativity meets innovation in website.
        </div>
        <div>
          At Bluseel, we are passionate about crafting stunning and functional
          websites that help businesses thrive in the digital world. Our team of
          skilled designers and developers work collaboratively, to bring your
          vision to life, ensuring that your online presence is not only
          visually appealing but also user-friendly and effective.
        </div>
        <div>
          <div className="font-anton text-2xl">Our Mission</div>
          Our mission is to empower businesses with exceptional web design
          solutions that drive engagement and growth. We believe in creating
          websites that are not only beautiful but also strategically designed
          to meet your business goals.
        </div>
        <div>
          <div className="font-anton text-2xl">Our Story</div>
          Bluseel was founded on the belief that great design has the power to
          transform businesses. Over the years, we have helped numerous clients
          establish a strong online presence, and we continue to push the
          boundaries of what’s possible in web design. We hire professionals
          from all across the globe to provide the best results.
        </div>
      </div>
    </div>
  );
};

export default About;
