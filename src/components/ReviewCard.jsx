import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import logo from '../assets/logo.png';
import bgImage from '../assets/home.jpg';
import pattern from "../assets/css-pattern-by-magicpattern.png";
import StarRateIcon from '@mui/icons-material/StarRate';

export default function ReviewCard() {
  const handleRedirect = () => {
    window.open('https://www.google.com/search?q=AddisVille+Hotel+Apartments+review', '_blank');
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#515151]/70 z-0" />

      {/* Card */}
      <div
        className="relative rounded-2xl shadow-xl max-w-[85%] lg:max-w-[40%] h-fit md:h-[65vh] w-full p-8 pt-16 text-center z-10 overflow-visible"
        style={{
          // backgroundImage: `url(${pattern})`,
          // backgroundRepeat: 'repeat',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // Semi-transparent white
        }}
      >
        {/* Yellow side bars */}
        <div className="absolute left-0 top-10 bottom-10 w-6 md:w-8 bg-[#CCAB7B] rounded-r-3xl z-0" />
        <div className="absolute right-0 top-10 bottom-10 w-6 md:w-8 bg-[#CCAB7B] rounded-l-3xl z-0" />

        {/* Logo Circle (Half-outside) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white rounded-full shadow-md p-4 border-5 border-[#574e46] w-[130px] h-[130px] md:w-[140px] md:h-[145px] flex items-center justify-center">
            <img src={logo} alt="AddisVille Logo" className="h-40 w-40 object-contain" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[#c5862b] font-extrabold text-lg mt-10 md:mt-18">
          When Excellence Meets Convenience
        </h2>
        <div className="border-t-2 border-[#969393] w-30 mx-auto mt-1 mb-1" />
        <div className="border-t-2 border-[#CCAB7B] w-40 mx-auto mb-4" />

        {/* Message */}
        <p className="text-gray-900  text-xl mb-6">
          It was a pleasure hosting with you!
          We’d be thrilled if you could
          share your feedback with us.
        </p>

        {/* Stars & Google Button */}
        <button
          onClick={handleRedirect}
          className="relative mt-4 inline-flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-full transition"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <StarRateIcon key={index} className="text-yellow-500 text-lg" />
            ))}
          </div>
          <div className='flex flex-row-reverse gap-2 border border-[#3791d2] rounded-xl p-2 hover:bg-gray-100'>
          <span className="text-sm font-medium mt-1">Review us on Google</span>
          <FcGoogle className="text-2xl mt-1" />
          </div>
        </button>
      </div>
    </div>
  );
}






