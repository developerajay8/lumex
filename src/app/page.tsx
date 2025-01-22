import Footer from "./component/footer";
import Header from "./component/header";
import About from "./component/aboutsec";
import "./globals.css";


export default function Home() {
  return (
    <div className="">
      {/* <div className="min-h-screen bg-black text-white font-sans p-5 text-center">
        <header className="flex justify-between items-center mb-5">
          <div className="text-2xl font-bold">
            <img src="/Rectangle 23 (1).png" alt="" />
          </div>
          <button className="bg-[#FF371A] rounded-[6px] w-[43px] h-[41px] flex items-center justify-center text-white text-lg">
            <img src="/Vector (1).png" alt="" />
          </button>
        </header>

        <main className="py-[48px] ">
          <div className=" max-w-[140px] mx-auto rounded-[20px] flex items-center justify-center gap-3  mb-4 border border-transparent custom-border-gradient">
            <div className="bg-[#FF371A] rounded-full w-[8px] h-[8px] "></div>
            <div className="text-[18px]">AI Powered</div>
          </div>

          <h1 className="text-[44px] leading-[55px] font-[700] bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">
            AI driven,
            <br />
            <span className="">Speedier face recognition</span>
            <br />
            from images
            <br />
            and video clips
          </h1>
          <p className="mt-4 text-[18px]">
            Find your images and videos in a flash.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-8 px-[48px] ">
            <div className="max-w-[121px] h-[42px] gap-2 items-center justify-center bg-[#E2E2E4] flex rounded-[7px] ">
              <img src="/Video AI.png" alt="" />
              <div className="text-[Black] leading-[14px] font-[400px] text-[12px] text-left">
                Fast face <br />
                Recognition
              </div>
            </div>
            <div className="max-w-[121px] h-[42px] gap-2 items-center justify-center bg-[#E2E2E4] flex rounded-[7px] ">
              <img src="/Video AI.png" alt="" />
              <div className="text-[Black] leading-[14px] font-[400px] text-[12px] text-left">
                Fast face <br />
                Recognition
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-[12px] pl-[65px] pr-[28px]">
            <div className="max-w-[121px] h-[42px] gap-2 items-center justify-center bg-[#E2E2E4] flex rounded-[7px] ">
              <img src="/Video AI.png" alt="" />
              <div className="text-[Black] leading-[14px] font-[400px] text-[12px] text-left">
                Fast face <br />
                Recognition
              </div>
            </div>
            <div className="max-w-[97px] h-[42px] gap-2 px-[6px] items-center justify-center bg-[#E2E2E4] flex rounded-[7px] ">
              <img src="/Video AI.png" alt="" />
              <div className="text-[Black] leading-[14px] font-[400px] text-[12px] text-left">
                Image Editing{" "}
              </div>
            </div>
          </div>

          <div className=" pt-[30px] flex items-center gap-[30px] mx-auto ">
            <div className="text-sm flex items-center gap-2">
              <img src="/weui_done2-filled.png" alt="" />
              99.7% Accuracy
            </div>
            <div className="text-sm flex items-center gap-2">
              <img src="/weui_done2-filled.png" alt="" />
              Fetch it in 0.05 Seconds
            </div>
          </div>

          <div className="mt-6 flex max-w-[199px] h-[51px] mx-auto justify-center space-x-4">
            <button className="bg-[#FF371A] text-white px-6 py-2 rounded-[10px] font-bold text-[14px]">
              Arrange Discovery
            </button>
          </div>

          <div className="mt-6 flex max-w-[168px] h-[51px] mx-auto justify-center space-x-4">
            <button className="border border-[#E2E2E4] text-white px-6 py-2 rounded-[10px] text-[14px] font-bold ">
              Get Brochure
            </button>
          </div>
        </main>
      </div> */}
      <div className="">
        <Header />
      </div>
      
      <About/>

      <div className="bg-black ">
        <Footer />
      </div>
    </div>
  );
}
