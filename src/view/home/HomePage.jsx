import React from 'react';
import SectionOne from './Sections/SectionOne';
import SectionThree from './Sections/SectionThree';
import SectionTwo from './Sections/SectionTwo';

const HomePage = () => {
  return (
    <main className='pt-4'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
};

export default HomePage;
