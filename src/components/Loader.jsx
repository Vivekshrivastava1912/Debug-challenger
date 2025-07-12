import React from "react";

const Loader = () => {
  return (
    <>
      <div className="w-14 h-14 grid border-[4.5px] border-transparent border-t-[#dbdcef] rounded-full animate-spin relative">
        <div className="absolute inset-[2.2px] border-[4.5px] border-t-[#ff7e03] border-transparent rounded-full animate-spin-reverse" />
        <div className="absolute inset-[8.9px] border-[4.5px] border-transparent rounded-full" />
      </div>

      <style>
        {`
          @keyframes spin-reverse {
            100% {
              transform: rotate(-360deg);
            }
          }

          .animate-spin-reverse {
            animation: spin-reverse 0.5s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Loader;