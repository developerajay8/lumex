"use client";

import { useEffect, useState } from "react";
import Link from "next/link"

import { Merriweather } from '@next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});



export default function Aboutsec() {
  const [showFullContent, setShowFullContent] = useState(false);

  const fullContent =
    "Enhance your business with our revolutionary AI solution which boosts revenue, cuts costs, and drives unparalleled growth. Experience the fastest and smartest solutions at your fingertips.";
  const truncatedContent = fullContent.split(" ").slice(0,15).join(" ") + "...";


  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")
      if (targetId) {
        const element = document.querySelector(targetId)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

  //   const links = document.querySelectorAll('a[href^="#"]')
  //   links.forEach((link) => {
  //     link.addEventListener("click", smoothScroll)
  //   })

  //   return () => {
  //     links.forEach((link) => {
  //       link.removeEventListener("click", smoothScroll)
  //     })
  //   }
  // }, [])

  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", smoothScroll as EventListener)
  })

  return () => {
    links.forEach((link) => {
      link.removeEventListener("click", smoothScroll as EventListener)
    })
  }
}, [])

const [activeButton, setActiveButton] = useState("overview")

const handleClick = (buttonId: string) => {
  setActiveButton(buttonId)
}

const getButtonClass = (buttonId: string) => {
  const baseClass = "text-[14px] font-[600] px-6 py-2 rounded-lg whitespace-nowrap transition-colors"
  if (buttonId === activeButton) {
    return `${baseClass} bg-gradient-to-r from-yellow-400 to-purple-500 text-[white] underline`
  }
  return `${baseClass} text-[#FFFFFF] hover:text-white`
}

  return (
    <div >
      <div className=" bg-first  ">
        <div className="py-[80px] max-w-[858px] xl:px-0 px-[16px] mx-auto  ">
          <div className="">
            <img src="/Frame 3384538 (1).png" className="mx-auto" alt="" />
            <h4 className="pt-[10px] sm:text-[44px] text-[22px] text-[#ffffff]  text-center sm:leading-[55px] leading-[30px] font-merriweather ">
              Turn Moments into Business <br className="sm:hidden block" /> with{" "}
              <br className="sm:block hidden" /> our Fastest SaaS Solution
            </h4>
            <p className="text-[#FFFFFF] sm:text-[18px] text-[14px] font-[400] sm:leading-[21px] leading-[20px] pt-[18px] text-center">
              We build saas solutions that drive growth and ensure success.
            </p>

            <div className="overflow-x-auto scroll-smooth">
              <div className="flex gap-3 max-w-[484px] mx-auto pt-[30px]">
                <img src="/AI Button (1).png" alt="" />
                <img src="/AI Button (2).png" alt="" />
                <img src="/AI Button (3).png" alt="" />
                <img src="/AI Button (4).png" alt="" />
              </div>
            </div>

            {/* <div className=" sm:hidden block  pt-[30px] max-w-[250px]  mx-auto">
              <div className="flex mx-auto gap-3">
                <img src="/AI Button (1).png" alt="" />
                <img src="/AI Button (2).png" alt="" />
              </div>

              <div className="flex mx-auto gap-3 pt-[12px]">
                <img src="/AI Button (3).png" alt="" />
                <img src="/AI Button (4).png" alt="" />
              </div>
            </div> */}

            <div className="max-w-[358px] mx-auto pt-[20px] flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <img src="/sahi.png" alt="" />
                <p className="text-[#EFEFF1] text-[12px] font-[400] ">
                  99.7% Accuracy
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/sahi.png" alt="" />
                <p className="text-[#EFEFF1] text-[12px] font-[400] ">
                  Fetch it in 0.05 Seconds
                </p>
              </div>
            </div>

            <div className="flex flex-wrap pt-[30px] justify-center gap-4">
              <button className="px-8 py-3 bg-[#FF371A] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Arrange Discovery
              </button>
              <button className="px-8 py-3 border border-[#E2E2E4] text-white rounded-lg hover:bg-white/5 transition-colors">
                Get Brochure
              </button>
            </div>
          </div>
        </div>
      </div>



      <div
        className="bg-[black]"
        style={{
          backgroundImage: `url('/Frame 3384633.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
         <nav className="flex items-center justify-between sm:py-[48px] py-[16px] max-w-[1061px] mx-auto overflow-x-auto gap-4">
      <button className={getButtonClass("overview")} onClick={() => handleClick("overview")}>
        <Link href="#overview">Overview</Link>
      </button>
      <button className={getButtonClass("howitwork")} onClick={() => handleClick("howitwork")}>
        <Link href="#howitwork">How it Works</Link>
      </button>
      <button className={getButtonClass("features")} onClick={() => handleClick("features")}>
        <Link href="#features">Features</Link>
      </button>
      <button className={getButtonClass("enrich")} onClick={() => handleClick("enrich")}>
        <Link href="#enrich">Enrich your Experiences</Link>
      </button>
      <button
        className={`text-[14px] font-[600] px-6 py-2 text-[#FFFFFF] rounded-lg whitespace-nowrap`}
        onClick={() => handleClick("arrange")}
      >
        <Link href="#arrange">Arrange Discovery</Link>
      </button>
    </nav>
      </div>

      <div className="bg-[#222222] py-12 relative">
        <div className="max-w-[1061px] mx-auto xl:px-[0px] px-[20px] ">
          <h4 id="overview" className="sm:text-[36px] text-[28px] text-center leading-[45px] font-merriweather text-[#FFFFFF]">
            About Aasvaa
          </h4>
          <p className="max-w-[761px] text-center pt-[10px] mx-auto sm:text-[18px] text-[14px] text-[#FFFFFF] font-[400]">
            At Aasvaa Universal Pvt Ltd. we deliver AI-driven SaaS
            solutions empowering businesses to boost revenue, enhance customer
            experiences, and scale in competitive markets.
          </p>

          <div className="bg-[#ff371a] mt-[25px] text-white rounded-[10px] max-w-[180px] text-center py-3 font-[400]  mx-auto">
            <a href="">Arrange Discovery</a>
          </div>
        </div>

        <div className="pt-[55px] xl:px-0 px-[20px]">
          <div className="sm:flex max-w-[1084px] mx-auto  gap-10 ">
            <div className="my-auto">
              <img src="/Frame 3384538 (1).png" className="" alt="" />
              <h4 className="text-[#ffffff] font-merriweather sm:text-[36px] text-[28px]  py-[10px] ">
                LumeX
              </h4>
              <p className="max-w-[439px] sm:block hidden text-[#BCBBC0] sm:text-[18px] text-[14px] sm:pb-[0px] pb-[20px] leading-[21px] font-[400] ">
                Enhance your business with our revolutionary AI solution which
                boosts revenue, cuts costs, and drives unparalleled growth.
                Experience the fastest and smartest solutions at your
                fingertips.
              </p>
              <div className="sm:hidden block">
                <p className="max-w-[439px] flex items-center text-[#BCBBC0] sm:text-[18px] text-[14px] sm:pb-[0px] pb-[20px] leading-[21px] font-[400]">
                  {showFullContent ? fullContent : truncatedContent}
                  {/* <img
                    src="/Frame 3384727.png"
                    alt="Expand content"
                    onClick={() => setShowFullContent(!showFullContent)}
                    className="cursor-pointer ml-2"
                  /> */}
                  {
                    !showFullContent ? (<img
                      src="/Frame 3384727.png"
                      alt="Expand content"
                      onClick={() => setShowFullContent(!showFullContent)}
                      className="cursor-pointer ml-2"
                    />):null}

                </p>
              </div>
            </div>
            <div className="">
              <img src="/Frame 3384658.png" alt="" />
            </div>
          </div>

          <div className="sm:block hidden">
            <div className="sm:flex max-w-[1084px] mx-auto relative gap-10 pt-[32px]">
              <div className="z-10">
                <img src="/Rectangle 50.png" alt="" />
              </div>
              <div className="pt-[30px]">
                <h4 className="text-[#ffffff] font-merriweather sm:text-[36px] text-[28px]  py-[10px] ">
                  Video Feature
                </h4>
                <p className="max-w-[439px] text-[#BCBBC0] sm:text-[18px] text-[14px] leading-[21px] font-[400] ">
                  Empowering users with AI-driven face recognition to effortlessly
                  scan, identify, and{" "}
                  <span className="text-[#F3CF00] ">
                    access video clips featuring their faces.{" "}
                  </span>{" "}
                  Our technology enables precise editing, seamless adjustments,
                  and efficient downloading of video segments, ensuring a tailored
                  and streamlined experience
                </p>
              </div>
            </div>
          </div>

          <div className="sm:hidden block ">
            <div className="sm:flex max-w-[1084px] mx-auto relative gap-10 pt-[32px]">

              <div className="pt-[20px]">
                <h4 className="text-[#ffffff] font-merriweather sm:text-[36px] text-[28px]  py-[10px] ">
                  Video Feature
                </h4>
                <p className="max-w-[439px] text-[#BCBBC0] sm:text-[18px] text-[14px] leading-[21px] font-[400] ">
                  Empowering users with AI-driven face recognition to effortlessly
                  scan, identify, and{" "}
                  <span className="text-[#F3CF00] ">
                    {" "}
                    access video clips featuring their faces.{" "}
                  </span>{" "}
                  Our technology enables precise editing, seamless adjustments,
                  and efficient downloading of video segments, ensuring a tailored
                  and streamlined experience
                </p>
              </div>
              <div className="z-10 pt-[10px]  ">
                <img src="/Rectangle 50.png" alt="" />
              </div>
            </div>
          </div>



        </div>
        <div className="absolute sm:bottom-0 bottom-[50px]">
          <img src="/Frame 1.png" alt="" className="w-screen" />
        </div>
      </div>

      <div className="bg-[#222222] xl:px-0 px-[20px]">
        <div className="max-w-[1088px] mx-auto sm:py-[80px] py-[20px]">
          <img src="/Frame 3384538 (4).png" className="mx-auto" alt="" />
          <p id="howitwork" className="sm:text-[36px] text-[28px] pt-[20px] text-white font-merriweather text-center">
            How it Works
          </p>
          <div className="sm:block hidden">
            <div
              className="flex gap-5  mt-[60px] 
           "
            >
              <div className="w-[20%] ">
                <img
                  src="/Group 2 (1).png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[18px my-[24px]">
                  Create events and upload images for seamless face recognition.
                </p>
              </div>
              <div className="w-[20%]">
                <img
                  src="/Group 2.png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[18px my-[24px]">
                  Send the event link to participants by email, QR code, or
                  WhatsApp.
                </p>
              </div>

              <div className="w-[20%]">
                <img
                  src="/Group.png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[18px my-[24px]">
                  Participants can click the link and take a selfie.
                </p>
              </div>
              <div className="w-[20%]">
                <img
                  src="/Group 3.png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[18px my-[24px]">
                  Our AI identifies participants with 99.07% accuracy and shows
                  them all their photos and videos.
                </p>
              </div>
              <div className="w-[20%]">
                <img
                  src="/Group 1.png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[18px my-[24px]">
                  Photos & videos can be downloaded directly from a phone.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[390px] mx-auto pt-[40px] sm:hidden block xl:px-0 px-[12px]">
            <div className="flex flex-wrap gap-2  ">
              <div className="flex gap-5">
                <div className="w-[50%] ">
                  <img
                    src="/Group 2 (1).png"
                    width={98}
                    height={98}
                    className="mx-auto"
                    alt=""
                  />
                  <p className="text-center text-white text-[12px] my-[24px]">
                    Create events and upload images for seamless face
                    recognition.
                  </p>
                </div>
                <div className="w-[50%]">
                  <img
                    src="/Group 2.png"
                    width={98}
                    height={98}
                    className="mx-auto"
                    alt=""
                  />
                  <p className="text-center text-white text-[12px] my-[24px]">
                    Send the event link to participants by email, QR code, or
                    WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-[50%]">
                  <img
                    src="/Group.png"
                    width={98}
                    height={98}
                    className="mx-auto"
                    alt=""
                  />
                  <p className="text-center text-white text-[12px] my-[24px]">
                    Participants can click the link and take a selfie.
                  </p>
                </div>

                <div className="w-[50%]">
                  <img
                    src="/Group 3.png"
                    width={98}
                    height={98}
                    className="mx-auto"
                    alt=""
                  />
                  <p className="text-center text-white text-[12px] my-[24px]">
                    Our AI identifies participants with 99.07% accuracy and
                    shows them all their photos and videos.
                  </p>
                </div>
              </div>

              <div className="w-[50%] mx-auto">
                <img
                  src="/Group 1.png"
                  width={98}
                  height={98}
                  className="mx-auto"
                  alt=""
                />
                <p className="text-center text-white text-[12px] my-[24px]">
                  Photos & videos can be downloaded directly from a phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222]">
        <div className="py-12 max-w-[1084px] mx-auto xl:px-0 px-[20px] ">
          <div className="">
            <img
              src="/Frame 3384538 (4).png"
              className="mx-auto pb-[10px] "
              alt=""
            />
            <h4 id="features" className="sm:text-[44px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]">
              Unleash, Unlock and <br className="sm:hidden block" /> Uplift{" "}
              <br className="sm:block hidden" />
              with Timeless AI
            </h4>
          </div>

          {/* desktop */}
          <div className="sm:block hidden">
            <div className="flex pt-[40px] gap-5">
              <div>
                <img
                  src="/Frame 3384642 (5).png"
                  className=""
                  alt="Feature 1"
                />
                <img
                  src="/Frame 3384645 (2).png"
                  alt="Feature 3"
                  className=" pt-[20px]"
                />
              </div>
              <div className="">
                <img src="/Frame 3384644.png" alt="Feature 2" />
                <img
                  src="/Group 40 (1).png"
                  alt="Feature 4"
                  className="pt-[20px]"
                />
              </div>
            </div>
            <div className="pt-[22px] ">
              <img src="/Frame 3384688.png" alt="Feature 5" />
            </div>
          </div>

          {/* mobile */}
          <div className="sm:hidden block px-[20px] ">
            <div className=" gap-5 pt-[40px] ">
              <img
                src="/Frame 3384642 (4).png"
                className="mx-auto pb-[20px]"
                alt=""
              />
              <img
                src="/Frame 3384645 (1).png"
                className="mx-auto pb-[20px]"
                alt=""
              />
              <img
                src="/Frame 3384644 (1).png"
                className="mx-auto pb-[20px]"
                alt=""
              />
              <img
                src="/Group 36 (1).png"
                className="mx-auto pb-[20px]"
                alt=""
              />
              <img src="/Group 13.png" className="mx-auto" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222]">
        <div className="py-12 max-w-[1084px] mx-auto  ">
          <div className="">
            <h3 id="enrich" className="sm:text-[44px] text-[28px] font-merriweather text-[#FFFFFF] sm:leading-[55px] leading-[35px] font-[700] text-center">
              Enrich your Experiences
            </h3>
          </div>

          <div className="sm:block hidden">
            <div className="pt-[50px] flex flex-wrap mx-auto gap-5">
              <img src="/Frame 3384670 (4).png" alt="" />
              <img src="/Frame 3384669 (3).png" alt="" />
              <img src="/Frame 3384669 (4).png" alt="" />
              <img src="/Frame 3384669 (5).png" alt="" />
              <img src="/Frame 3384670 (5).png" alt="" />
              <img src="/Frame 3384670 (6).png" alt="" />
            </div>
          </div>

          <div className="sm:hidden block px-[20px]">
            <div className="pt-[50px]">
              <img
                src="/Frame 3384670.png"
                className="mx-auto pb-[22px]"
                alt=""
              />
              <img
                src="/Frame 3384669.png"
                className="mx-auto pb-[22px]"
                alt=""
              />
              <img
                src="/Frame 3384669 (1).png"
                className="mx-auto pb-[22px]"
                alt=""
              />
              <img
                src="/Frame 3384669 (2).png"
                className="mx-auto pb-[22px]"
                alt=""
              />
              <img
                src="/Frame 3384670 (1).png"
                className="mx-auto pb-[22px]"
                alt=""
              />
              <img
                src="/Frame 3384670 (2).png"
                className="mx-auto pb-[22px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

<div className="bg-[#222222] ">
      <div className=" bgt">
        <div className="max-w-[1088px] mx-auto py-12">
          <div className="max-w-[860px] mx-auto ">
            <img src="/Frame 3384538 (1).png" className="mx-auto" alt="" />
            <h3 id="arrange" className="sm:text-[44px] text-[28px] pt-[18px] text-center sm:leading-[45px] leading-[35px] font-merriweather font-[700] text-[#FFFFFF]">
              Explore the <br className="sm:hidden block" /> possibilities of
              AI, <br className="sm:hidden block" /> from Moments to{" "}
              <br className="sm:hidden block" /> Memories
            </h3>
            <p className="max-w-[761px] text-center pt-[18px] mx-auto sm:text-[18px] text-[14px] text-[#FFFFFF] font-[400]">
              Discover our AI-driven solutions designed to{" "}
              <br className="sm:hidden block" /> optimize and elevate business
              operations, <br className="sm:hidden block" /> empowering
              organizations with advanced <br className="sm:hidden block" />
              capabilities and efficiency.
            </p>

            <div className="bg-[#FF371A] mt-[25px] text-white rounded-[10px] max-w-[200px] text-center py-3 font-[400]  mx-auto">
              <a href="">Arrange Discovery</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
