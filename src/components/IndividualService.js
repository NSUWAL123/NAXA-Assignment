import React from "react";

const IndividualService = (props) => {
  const service = props.service;
  console.log(service);
  return (
    <section className="bg-[#F4F4F4] w-[100%] flex flex-col items-center px-4">
      <div className={`max-w-[30rem] lg:max-w-[95%] xl:max-w-[90%] lg:flex lg:justify-around lg:pt-[3rem] lg:items-center ${(service.service_order)%2===0 && "flex-row-reverse"} `}>
        <div className="w-[100%] flex justify-center mt-[6rem] lg:w-[48%]">
          <img src={service.icon} alt="" className="w-[30rem]" />
        </div>

        <div className="flex flex-col items-center lg:w-[48%] lg:items-start">
          <img src={service.photo} alt="" className="w-[3rem] mt-[1rem] lg:w-[4rem]" />
          <h2 className="text-2xl font-semibold my-4 text-center xl:text-3xl">
            {service.title}
          </h2>

          <p
            dangerouslySetInnerHTML={{ __html: service.description1 }}
            className="text-center text-sm lg:text-left xl:text-md xl:text-[15px] xl:leading-6"
          ></p>
          <div className="bg-[#E9EBFF] text-center mt-8 text-sm lg:text-left">
            <p
              dangerouslySetInnerHTML={{ __html: service.description2 }}
              className="p-6 xl:text-[15px] xl:leading-6"
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualService;
