import React from "react";
import bannerimg from "../../assets/banner-image.png";
import Button from "../CommonComponent/Button";

const Banner = () => {
  return (
    <>
      <div className="py-28 bg-[#FFF7E7]">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div >
              <h1>
                A trusted provider of <span>courier services.</span>
              </h1>
              <p>
                We deliver your products safely to your home in a reasonable
                time.
              </p>
              <div>
                <Button className="px-5 py-3 bg-[#FFE4D9] font-oxanium text-[#F95C19] text-xl font-bold rounded">
                  Get started
                </Button>
              </div>
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
