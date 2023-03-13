import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../actions";
import IndividualService from "../components/IndividualService";
import Navbar from "../components/Navbar";
import ServiceMain from "../components/ServiceMain";

const ServicePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  const services = useSelector((state) => state.serviceReducer.services);

  let filteredServices = services.sort(
    (a, b) => a.service_order - b.service_order
  );

  return (
    <div className="font-display lg:relative">
      <div className="flex w-[100%] flex-col items-center relative md:pb-[2rem]">
        <Navbar />
        <ServiceMain />

        <div className="flex items-center justify-evenly bg-white shadow-2xl shadow-gray-400 leading-7 py-3 lg:flex-row lg:px-3 lg:w-[90%] md:absolute -bottom-12 xl:-bottom-10 flex-wrap gap-2">
          {filteredServices.map((service) => {
            return (
              <a
                href={`#${service.id}`}
                className="text-[14px] w-[7rem] xl:w-[9rem] text-center leading-5 font-medium hover:text-[#FFAB00]"
                key={service.id}
              >
                {service.title}
              </a>
            );
          })}
        </div>
      </div>
      {filteredServices.map((service) => {
        return (
          <div id={service.id}>
            <IndividualService service={service} key={service.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ServicePage;
