import React from "react";
import logo from "../../assets/Logo.png";
import { IoSearch } from "react-icons/io5";

const navbar = () => {
  return (
    <>
      <div className="bg-[#FFFAF0] py-6">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img src={logo} alt={logo} />
              </picture>
            </div>
            <div className="flex items-center justify-between gap-x-11">
              <div>
                <ul className="flex items-center gap-x-6">
                  <li>
                    <a
                      href="#"
                      className="font-raleway text-[#817382] font-extrabold text-base hover:text-[#F95C19] "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-raleway text-[#817382] font-extrabold text-base hover:text-[#F95C19] "
                    >
                      Our services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-raleway text-[#817382] font-extrabold text-base hover:text-[#F95C19] "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-raleway text-[#817382] font-extrabold text-base hover:text-[#F95C19] "
                    >
                      What’s new?
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-x-2.5">
                <div className="p-3.5 bg-[#FFEDC9] text-[#FFAF0F] text-2xl font-bold rounded">
                  <IoSearch />
                </div>
                <div className="px-5 py-3 bg-[#FFE4D9] font-oxanium text-[#F95C19] text-xl font-bold rounded">
                  <button>Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
