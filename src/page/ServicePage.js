import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../actions";
import IndividualService from "../components/IndividualService";

const ServicePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  const services = useSelector((state) => state.serviceReducer.services);
  
  let filteredServices = services.sort((a, b) => a.service_order - b.service_order);


  return (
    
    <div className="font-display">
      {(filteredServices.length > 0) && (filteredServices.map((service) => {
        return <IndividualService service={service} key={service.id}/>;
      }))}
    </div>
  );
};

export default ServicePage;
