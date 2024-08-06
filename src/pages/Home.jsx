import React from 'react';

const Home = () => {
  return (
    <div>
      <div class="font-anton">This text is using the Anton font.</div>
      <div class="font-roboto font-normal">
        This text is using the roboto Sans Regular font.
      </div>
      <div class="font-roboto font-bold">
        This text is using the roboto Sans Bold font.
      </div>
      <div class="font-roboto italic">
        This text is using the roboto Sans Italic font.
      </div>
      <div class="font-roboto font-bold italic">
        This text is using the roboto Sans Bold Italic font.
      </div>
    </div>
  );
};

export default Home;
