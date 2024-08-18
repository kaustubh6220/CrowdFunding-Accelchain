import React from 'react';
import { Button } from '../ui/button';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/bitcoin.json';

const Heros = () => {
  const handleDonateClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by one viewport height
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div className='w-full shadow-md shadow-slate-700 bg-slate-700 rounded-md flex justify-between items-center mt-4'>
      <div className="text-left w-fit flex flex-col ml-4">
        <p className="max-lg:text-xl text-5xl text-white text-left tracking-tighter">Crowdfunding made easy.</p>
        <p className="max-lg:text-sm text-lg text-white mt-4 tracking-tighter">Let's make a difference together.</p>
        <p className="max-lg:text-sm text-lg text-white tracking-tighter">
          You can raise or make a donation, and our platform will let you do that effortlessly anywhere in the world.
        </p>
        <div className='flex flex-row gap-4 mt-8'>
          <Button className='bg-green-500 hover:bg-green-600' onClick={handleDonateClick}>Donate</Button>
          <Button className='bg-green-500 hover:bg-green-600'>Create Campaign</Button>
        </div>
      </div>
      <Lottie className="" animationData={animationData} />
    </div>
  );
};

export default Heros;
