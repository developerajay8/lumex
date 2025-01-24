"use client";

import { useState } from "react";

export default function Sidebar() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <>
      <div className="py-12 px-6 bg-black sm:hidden block">
        <div className="">
          <img src="/Group 44 1 (1).png" alt="" />
          <div className="pt-[10px] max-w-[250px]">
            <p className="text-[#F3F3F3] text-[18px] leading-[28px] font-[400 ]">
            Welcome to Aasvaa Universal, where AI, ML, and computer vision power innovation to simplify, enrich, and empower.
            </p>
          </div>
          <div className="flex items-center mt-[16px] gap-4">
            <img src="/Link - icon.png" alt="" />
            <img src="/Link - icon (1).png" alt="" />
            <a href="https://www.instagram.com/aasvaainnovlabs?igsh=MTd4dTIxdGRmeXc0aA==">
            <img src="/Link - icon (2).png" alt="" />
            </a>
            <a href="Https://x.com/aasvaainnovlabs">
            <img src="/Frame 105.png" alt="" />
            </a>
          </div>
        </div>

        <div className="pt-[20px] ">
          <div className="">
            <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
              Explore
            </h4>
            <img src="/span.elementor-divider-separator.png" alt="" />

            <ul className="pt-[10px] ">
              <li className="flex items-center py-[8px]  gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                <img src="/Icon.png" alt="" />
                <a href="#" className="border-b-2">
                  Overview
                </a>
              </li>
              <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                <img src="/Icon.png" alt="" />
                <a href="#" className="border-b-2">
                  How it works
                </a>
              </li>
              <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                <img src="/Icon.png" alt="" />
                <a href="#" className="border-b-2">
                  Features
                </a>
              </li>
              <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                <img src="/Icon.png" alt="" />
                <a href="#" className="border-b-2">
                  Enrich your experiences
                </a>
              </li>
              <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                <img src="/Icon.png" alt="" />
                <a href="#" className="border-b-2">
                  Arrange Discovery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="pt-[20px] ">
          <div className="">
            <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
              News
            </h4>
            <img src="/__after.png" alt="" />

            <div className="pt-[10px] ">
              <p className="text-[16px] font-[500] text-[#F3F3F3] ">
                Our services are proudly utilized by the CMO of rajasthan
              </p>
              <span className="text-[#FF371A] text-[15px] font-[400] ">
              January 22, 2025
              </span>
            </div>

            <div className="pt-[14px] ">
              <p className="text-[16px] font-[500] text-[#F3F3F3] ">
              Rajasthan Eyes AI Township: Piyush Goyal.. 

              </p>
              <span className="text-[#FF371A] text-[15px] font-[400] ">
                January 16, 2025
              </span>
            </div>
          </div>
        </div> */}

        <div className="pt-[20px] ">
          <div className="">
            <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
              Contact
            </h4>
            <img src="/span.elementor-divider-separator.png" alt="" />

            <div className="pt-[14px] flex items-center gap-4">
              <img src="/Icon (1).png" alt="" />
              <span className="text-[18px] text-[#F3F3F3] font-[400] ">
                666 888 0000
              </span>
            </div>

            <div className="pt-[14px] flex items-center gap-4">
              <img src="/Icon (2).png" alt="" />
              <span className="text-[18px] text-[#F3F3F3] font-[400] ">
              Shivang.jain@aasvaalabs.com 
              </span>
            </div>

            <div className="pt-[14px] flex items-start  gap-4">
              <img src="/Vector (2).png" alt="" className="pt-[5px]" />
              <span className="text-[18px] text-[#F3F3F3] font-[400] ">
                Sansthan Path, Malviya Nagar, Jaipur,
                Rajasthan 302017
              </span>
            </div>

            <div className="max-w-[270px] h-[50px] pt-[14px] ">
              <form onSubmit={handleSubmit} className="flex w-[100%] max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-2 rounded-l-md bg-white text-[#878680] placeholder-gray-500 focus:outline-none text-[12px] "
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 w-[50px] h-[50px] bg-[#FF371A] text-white rounded-r-md hover:bg-[#E63E2B] transition-colors"
                  aria-label="Subscribe"
                >
                  <img src="/Icon (3).png" alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:block hidden bg-black max-w-[1040px] mx-auto xl:px-[0px] px-[20px]">
        <div className="flex gap-10">
          <div className="">
            <img src="/Group 44 1.png" alt="" />
            <div className="pt-[10px] max-w-[390px]">
              <p className="text-[#F3F3F3]  text-[18px] leading-[28px] font-[400 ]">
              Welcome to Aasvaa Universal, where AI, ML, and computer vision power innovation to simplify, enrich, and empower.
              </p>
            </div>
            <div className="flex items-center mt-[16px] gap-4">
              <img src="/Link - icon.png" alt="" />
              <img src="/Link - icon (1).png" alt="" />
              <a href="https://www.instagram.com/aasvaainnovlabs?igsh=MTd4dTIxdGRmeXc0aA==">
            <img src="/Link - icon (2).png" alt="" />
            </a>
            <a href="Https://x.com/aasvaainnovlabs">
            <img src="/Frame 105.png" alt="" />
            </a>
            </div>
          </div>

          <div className="">
            <div className="">
              <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
                Explore
              </h4>
              <img src="/span.elementor-divider-separator.png" alt="" />

              <ul className="pt-[10px] ">
                <li className="flex items-center py-[8px]  gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                  <img src="/Icon.png" alt="" />
                  <a href="#" className="border-b-2">
                    Overview
                  </a>
                </li>
                <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                  <img src="/Icon.png" alt="" />
                  <a href="#" className="border-b-2">
                    How it Works
                  </a>
                </li>
                <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                  <img src="/Icon.png" alt="" />
                  <a href="#" className="border-b-2">
                    Features
                  </a>
                </li>
                <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                  <img src="/Icon.png" alt="" />
                  <a href="#" className="border-b-2">
                    Enrich your Experiences
                  </a>
                </li>
                <li className="flex items-center py-[8px] gap-4 text-[#F3F3F3] text-[18px] font-[400] ">
                  <img src="/Icon.png" alt="" />
                  <a href="#" className="border-b-2">
                    Arrange Discovery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className=" ">
            <div className="">
              <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
                News
              </h4>
              <img src="/__after.png" alt="" />

              <div className="pt-[10px] ">
                <p className="text-[16px] font-[500] text-[#F3F3F3] ">
                  
                  Our services are proudly <br /> utilized by the CMO of rajasthan
                </p>
                <span className="text-[#FF371A] text-[15px] font-[400] ">
                January 22, 2025
                </span>
              </div>

              <div className="pt-[14px] ">
                <p className="text-[16px] font-[500] text-[#F3F3F3] ">
                Rajasthan Eyes AI Township: 
                <br /> Piyush Goyal.. 
                </p>
                <span className="text-[#FF371A] text-[15px] font-[400] ">
                January 16, 2025
                </span>
              </div>
            </div>
          </div> */}

          <div className=" ">
            <div className="">
              <h4 className="text-[22px] font-[700] leading-[27px] pb-[6px] text-[#FFFFFF] ">
                Contact
              </h4>
              <img src="/span.elementor-divider-separator.png" alt="" />

              <div className="pt-[14px] flex items-center gap-4">
                <img src="/Icon (1).png" alt="" />
                <span className="text-[18px] text-[#F3F3F3] font-[400] ">
                  666 888 0000
                </span>
              </div>

              <div className="pt-[14px] flex items-center gap-4">
                <img src="/Icon (2).png" alt="" />
                <span className="text-[18px] text-[#F3F3F3] font-[400] ">
                Shivang.jain@aasvaalabs.com 
                </span>
              </div>

              <div className="pt-[14px] flex items-start  gap-4">
                <img src="/Vector (2).png" alt="" className="pt-[5px]" />
                <span className="text-[18px] text-[#F3F3F3] font-[400] ">
                 Sansthan Path, Malviya Nagar, <br /> Jaipur,
                  Rajasthan 302017
                </span>
              </div>

              <div className="max-w-[270px] h-[50px] pt-[14px] ">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-[100%] max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 px-4 py-2 rounded-l-md bg-white text-[#878680] placeholder-gray-500 focus:outline-none text-[12px] "
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 w-[50px] h-[50px] bg-[#FF371A] text-white rounded-r-md hover:bg-[#E63E2B] transition-colors"
                    aria-label="Subscribe"
                  >
                    <img src="/Icon (3).png" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FF371A] sm:block hidden xl:px-0 px-[20px]">
        <div className="max-w-[1088px] text-[14px] py-[14px] flex items-center justify-between mx-auto">
          <div className="text-white">
          © All Copyright 2024 by shawonetc Themes
          </div>

          <div className="flex items-center text-[14px] text-white ">
            <div className="border-r-2 pr-4">Terms of Use</div>
            <div className="pl-4">Privacy Policy</div>
          </div>

        </div>
      </div>

      <div className="bg-[#FF371A]  sm:hidden block xl:px-0 px-[20px] ">
        <div className="max-w-[1088px] text-[14px] py-[14px] mx-auto">
          <div className="text-white text-[14px] text-center ">
          © All Copyright 2024 by shawonetc Themes
          </div>

          <div className="flex pt-[8px] text-[14px] items-center justify-between text-center text-white ">
            <div className=" text-[14px]">Terms of Use</div>
            <div className="text-[14px]">Privacy Policy</div>
          </div>

        </div>
      </div>
    </>
  );
}
