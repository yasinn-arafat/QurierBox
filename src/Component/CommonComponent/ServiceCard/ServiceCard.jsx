import React from "react";
import { GrDocumentMissing } from "react-icons/gr";

const ServiceCard = ({
  icon,
  CardTitle,
  CaradDetails,
  list_one,
  list_two,
  list_three,
}) => {
  return (
    <>
      <div className="w-[424px] h-[583px] py-[60px] px-[60px] bg-white ">
        <div className="text-center  ">
          <div className="bg-black absolute inline-block w-[69px] h-[67px]">
            <span className="inline-block relative text-6xl text-[#F95C19] ">
              {icon ? icon : <GrDocumentMissing />}
            </span>
          </div>
          <div>
            <h1 className="pt-7 pb-8 text-[25px] text-[#464558] font-raleway font-extrabold ">
              {CardTitle ? CardTitle : "Title"}
            </h1>
          </div>
        </div>

        <div className="text-base text-[#7B7A8B]">
          <p>{CaradDetails ? CaradDetails : "Details"}</p>
          <ul className="pt-10 pb-[60px] flex flex-col gap-3 list-disc list-inside marker:text-[#F95C19]">
            <li>{list_one ? list_one : "List"}</li>
            <li>{list_two ? list_two : "List"}</li>
            <li>{list_three ? list_three : "List"}</li>
          </ul>
        </div>
        <div>
          <button className="w-full py-3 text-[#F95C19] text-xl font-oxanium font-bold border border-[#F95C19] rounded-md cursor-pointer ">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
