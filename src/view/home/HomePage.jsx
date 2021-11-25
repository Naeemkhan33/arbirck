import React from 'react';
import SectionOne from './Sections/SectionOne';
import SectionThree from './Sections/SectionThree';
import SectionTwo from './Sections/SectionTwo';

const HomePage = () => {
  return (
    <main className='pt-5'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
};

export default HomePage;
