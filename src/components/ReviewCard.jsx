import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import StarRateIcon from '@mui/icons-material/StarRate';
import logo from '../assets/logo.png';
import bgImage from '../assets/10002.jpg';
import pattern from "../assets/pattern.png";

export default function ReviewCard() {
  const handleRedirect = () => {
    window.open(
      'https://www.google.com/search?sca_esv=f5357ae72790bb1e&hl=en&sxsrf=AE3TifMQv1zVHwD__bSB-cPPQgisAWxuRA:1749889265912&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3P7Sr7LRS3CJpolCrPJSXwF-_Xtl9AWuCn_Ym3_37Df5gapuUAudVlGrdO9_UqetkZA1XP6nrGMiR3Fxb5DL9S0QKpBiWOOqKaDDpc6reU3f9w1hQ==&q=Addis+Ville+Hotel+Apartment+Reviews&sa=X&ved=2ahUKEwjb99zAvfCNAxV0gP0HHQ9ANvsQ0bkNegQIIBAE&biw=1517&bih=772&dpr=0.9#lrd=0x164b850068b9bc65:0x510d5df8dc61d536,3',
      '_blank'
    );
  };

  return (
    <>
      <div
        className="relative w-full min-h-[92vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#515151]/70 z-0" />

        {/* Pattern Card with white overlay */}
        <div
          className="relative rounded-2xl shadow-xl max-w-[85%] lg:max-w-[40%] h-fit lg:h-[65vh] w-full p-8 pt-16 text-center z-10 overflow-visible bg-cover bg-center"
          style={{
            backgroundImage: `url(${pattern})`,
          }}
        >
          {/* White overlay for readability */}
          <div className="absolute inset-0 bg-white/80 rounded-2xl z-0" />

          {/* Yellow Side Bars */}
          <div className="absolute left-0 top-30 bottom-0 w-6 md:w-8 bg-[#CCAB7B] rounded-tr-3xl z-0" />
          <div className="absolute right-0 top-0 bottom-30 w-6 md:w-8 bg-[#CCAB7B] rounded-bl-3xl z-0" />

          {/* Logo Circle */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-white rounded-full shadow-md p-4 border-5 border-[#574e46] w-[130px] h-[130px] md:w-[140px] md:h-[145px] flex items-center justify-center">
              <img src={logo} alt="AddisVille Logo" className="h-40 w-40 object-contain" />
            </div>
          </div>

          {/* Card Content */}
          <div className="relative z-10">
            <h2 className="text-[#c5862b] font-extrabold text-xl mt-10 md:mt-18">
              When Excellence Meets Convenience
            </h2>
            <div className="border-t-2 border-[#969393] w-30 mx-auto mt-1 mb-1" />
            <div className="border-t-2 border-[#CCAB7B] w-40 mx-auto mb-4" />

            <p className="text-gray-900 text-md md:text-lg mb-4 max-w-[80%] mx-auto">
              It was a pleasure hosting you!
              Please take a moment to share your experience with us.
            </p>

            {/* Stars and Google Button */}
            <button
              onClick={handleRedirect}
              className="relative mt-4 inline-flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-full transition"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <StarRateIcon key={index} className="text-yellow-500 text-lg" />
                ))}
              </div>
              <div className="bg-white flex flex-row-reverse gap-2 border border-[#3791d2] rounded-xl p-2 hover:bg-gray-100">
                <span className="text-sm font-medium mt-1">Review us on Google</span>
                <FcGoogle className="text-2xl mt-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-center py-4 text-gray-700 text-sm">
        © {new Date().getFullYear()} Powered by{' '}
        <a
          href="https://seedgit.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CCAB7B] hover:underline font-medium"
        >
          S.E.E.D
        </a>
      </footer>
    </>
  );
}








