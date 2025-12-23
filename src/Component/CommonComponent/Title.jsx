import React from "react";

const Title = ({ headingTitle, subTitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl text-[#F95C19] font-oxanium font-bold">
        {headingTitle ? headingTitle : `Title`}
      </h2>
      <h3 className="text-[39px] text-[#11111D] font-raleway font-extrabold">
        {subTitle ? subTitle : `SubTitle`}
      </h3>
    </div>
  );
};

export default Title;
