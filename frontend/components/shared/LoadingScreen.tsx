import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <FadeLoader color="#ffffff" />
      <p className="text-white mt-4">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
