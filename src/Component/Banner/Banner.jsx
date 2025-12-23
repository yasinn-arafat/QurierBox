import React from "react";
import bannerimg from "../../assets/banner-image.png";
import Button from "../CommonComponent/Button";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="py-28 bg-[#FFF7E7]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="w-[467px] pb-4 text-5xl text-[#261134] font-raleway font-normal ">
                <h1>
                  A trusted provider of
                  <span className="font-extrabold"> courier services.</span>
                </h1>
              </div>
              <p className="pb-10 w-[330px] text-xl text-[#4D4D4D] font-raleway font-normal">
                We deliver your products safely to your home in a reasonable
                time.
              </p>

              <Button className="px-5 py-3 bg-[#F95C19] inline-block font-oxanium text-[#FFFFFF] text-xl font-bold rounded">
                <div className="flex items-center gap-x-2 justify-between">
                  Get started <FaArrowRight />
                </div>
              </Button>
            </div>
            <div>
              <picture>
                <img src={bannerimg} alt={bannerimg} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
