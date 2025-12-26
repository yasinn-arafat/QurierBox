import React from "react";
import Title from "../CommonComponent/Title.jsx";
import ServiceCard from "../CommonComponent/ServiceCard/ServiceCard.jsx";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Service = () => {
  return (
    <div className="bg-[#FFF6E5] py-24">
      <div className="container mx-auto">
        <div>
          <Title
            headingTitle={"SERVICES"}
            subTitle={"Our services for you"}
          ></Title>
        </div>
        <div>
          <ServiceCard
            icon={<MdOutlineBusinessCenter />}
            CardTitle={"Business Services"}
            CaradDetails={
              "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."
            }
            list_one={"Corporate goods"}
            list_two={"Shipment"}
            list_three={"Accesories"}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
