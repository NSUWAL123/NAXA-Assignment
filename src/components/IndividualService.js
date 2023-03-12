import React from "react";

const IndividualService = (props) => {
  const service = props.service;
  console.log(service);
  return (
    <section className="bg-[#F4F4F4] w-screen flex flex-col items-center px-4">
      <div className="w-screen flex justify-center mt-[6rem]">
        <img src={service.icon} alt="" className="w-[30rem]" />
      </div>

      <div className="flex flex-col items-center ">
        <img src={service.photo} alt="" className="w-[3rem] mt-[1rem]"/>
        <h2 className="text-2xl font-semibold my-4 text-center">{service.title}</h2>

        <p dangerouslySetInnerHTML={{ __html: service.description1 }} className="text-center text-sm"></p>
        <div className="bg-[#E9EBFF] text-center mt-8 text-sm">
          <p
            dangerouslySetInnerHTML={{ __html: service.description2 }}
            className="p-6"
          ></p>
        </div>
      </div>
    </section>
  );
};

export default IndividualService;
