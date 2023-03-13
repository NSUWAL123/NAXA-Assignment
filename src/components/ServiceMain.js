import React from "react";

const ServiceMain = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center lg:items-start lg:pl-[4rem] xl:pl-[6rem] pt-[2rem]">
      <div className="w-[90%] h-[24rem] md:h-[18rem] xl:h-[26rem] flex flex-col justify-evenly max-w-[30rem] md:max-w-[650px] xl:max-w-[1100px]">
        <p className="font-semibold text-[#FFAB00]">SERVICES</p>
        <h1 className="text-4xl xl:text-6xl leading-[2.5rem]">
          At <span className="text-[#124AF4]">NAXA</span>, we work on{" "}
          <span className="text-[#124AF4]">ideas</span>; ideas that can provide{" "}
          <span className="text-[#124AF4]">simple solutions</span> to{" "}
          <span className="text-[#124AF4]">complex problems</span>.
        </h1>

        <p className="font-medium text-sm lg:max-w-[650px] lg:font-semibold xl:text-lg xl:leading-9">
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </div>
    </div>
  );
};

export default ServiceMain;
