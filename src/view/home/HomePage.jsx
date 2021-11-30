import React from 'react';
import SectionOne from './Sections/SectionOne';
import SectionThree from './Sections/SectionThree';
import SectionTwo from './Sections/SectionTwo';

const HomePage = ({brickBalance,busdBalance,depositToVault,withdraw,getReward,buyToken}) => {
  return (
    <main className='pt-4'>
      <SectionOne brickBalance={brickBalance} busdBalance={busdBalance} depositToVault={depositToVault} buyToken={buyToken}/>
      <SectionTwo withdraw={withdraw} depositToVault={depositToVault} getReward={getReward}/>
      <SectionThree />
    </main>
  );
};

export default HomePage;
