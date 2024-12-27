// import React from 'react'


// const Button = ({ label, iconURL, backgroundColor, borderColor, textColor}) => {
//   return (
//     <button 
//     className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat
//     text-lg leading-none
//     ${backgroundColor
//     ? `${backgroundColor} ${textColor} ${borderColor}`

//     :' bg-coral-red  text-white
//     border-orange-600'} rounded-full`}
//        {label}

//      {iconURL&&<img
//        src={iconURL}
//        alt="arrow right icon"
//        className="ml-2 rounded-full w-5 h-5"
//        />}
//     </button>
//   )
// }

// export default Button








import React from 'react';

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullwidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat
      text-lg leading-none rounded-full ${fullwidth && 'w-full'}
      ${backgroundColor ? `${backgroundColor} ${textColor} border ${borderColor}` : 'bg-coral-red text-white border-orange-600'}`}>
      
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
