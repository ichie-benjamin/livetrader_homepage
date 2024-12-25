import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay } from "react-icons/fa";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Investors() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Smoother fade transition
        speed={2000}         navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000, // 3 seconds delay for autoplay
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-red-600 w-full">
 
            <div className="relative bg-[url('/equitymarketspro/onegirl.jpg')] bg-center bg-cover w-full text-gray-100 overflow-hidden ">
              <div className=" py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl- p-2 sm:p-5 mx-auto">
                  <div className=" order-2 md:order-1 px-5">
                    <h2 className="font-bold pe-2 text-2xl md:text-3xl lg:text-4xl mb-4 font-sans">
                      {" "}
                      Meet our Popular Investors
                    </h2>{" "}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight font-sans">
                      our company’s Popular Investor Program recognises
                      talented, savvy, responsible traders who share their
                      knowledge. Our top-tier Popular Investors earn up to 2%
                      annually on their assets under management.
                    </h1>
                    <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
                      Popular Investor Program{" "}
                    </button>{" "}
                    <div>
                      <p className="text-xs text-gray-300 max-w-96">
                        Past performance is not an indication of future results.
                        This is not investment advice. Your capital is at risk.
                      </p>
                    </div>
                    <div className="sm:flex gap-4 mt-5">
                      <div className="bg-hBlue grid place-content-center p-4 w-fit mb-2">
                        <FaPlay  className="text-3xl"/>
                      </div>
                      <div className="flex flex-col justify-end  h-full">
                      <h1 className="text-xl md:text-2xl  font-extralight font-sans">ONEGIRL
                    </h1>
                    <p className="text-sm">FROM  UNITED KINGDOM</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-10 sm:px-5 order-2"></div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
            <div className="relative bg-[url('/equitymarketspro/two.jpg')] bg-center bg-cover w-full text-gray-100 overflow-hidden ">
              <div className=" py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl p-2 sm:p-5 mx-auto">
                  <div className=" order-2 md:order-1 px-5">
                    <h2 className="font-bold pe-2 text-2xl md:text-3xl lg:text-4xl mb-4 font-sans">
                      {" "}
                      Meet our Popular Investors
                    </h2>{" "}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight font-sans">
                      our company’s Popular Investor Program recognises
                      talented, savvy, responsible traders who share their
                      knowledge. Our top-tier Popular Investors earn up to 2%
                      annually on their assets under management.
                    </h1>
                    <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
                      Popular Investor Program{" "}
                    </button>{" "}
                    <div>
                      <p className="text-xs text-gray-300 max-w-96">
                        Past performance is not an indication of future results.
                        This is not investment advice. Your capital is at risk.
                      </p>
                    </div>
                    
                    <div className="sm:flex gap-4 mt-5">
                      <div className="bg-hBlue grid place-content-center p-4 w-fit mb-2">
                        <FaPlay  className="text-3xl"/>
                      </div>
                      <div className="flex flex-col justify-end  h-full">
                      <h1 className="text-xl md:text-2xl  font-extralight font-sans">JAYNEMESIS
                    </h1>
                    <p className="text-sm">FROM  UNITED KINGDOM</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-10 sm:px-5 order-1 md:order-2"></div>
                </div>
              </div>
            </div>
       {" "}
        </SwiperSlide>
        <SwiperSlide>
        
            <div className="relative bg-[url('/equitymarketspro/three.jpg')] bg-center bg-cover w-full text-gray-100 overflow-hidden ">
              <div className=" py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl p-2 sm:p-5 mx-auto">
                  <div className=" order-2 md:order-1 px-5">
                    <h2 className="font-bold pe-2 text-2xl md:text-3xl lg:text-4xl mb-4 font-sans">
                      {" "}
                      Meet our Popular Investors
                    </h2>{" "}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight font-sans">
                      our company’s Popular Investor Program recognises
                      talented, savvy, responsible traders who share their
                      knowledge. Our top-tier Popular Investors earn up to 2%
                      annually on their assets under management.
                    </h1>
                    <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
                      Popular Investor Program{" "}
                    </button>{" "}
                    <div>
                      <p className="text-xs text-gray-300 max-w-96">
                        Past performance is not an indication of future results.
                        This is not investment advice. Your capital is at risk.
                      </p>
                    </div>
                    
                    <div className="sm:flex gap-4 mt-5">
                      <div className="bg-hBlue grid place-content-center p-4 w-fit mb-2">
                        <FaPlay  className="text-3xl"/>
                      </div>
                      <div className="flex flex-col justify-end  h-full">
                      <h1 className="text-xl md:text-2xl  font-extralight font-sans">WESL3Y
                    </h1>
                    <p className="text-sm">FROM  UNITED KINGDOM</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-10 sm:px-5 order-1 md:order-2"></div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
  
            <div className="relative bg-[url('/equitymarketspro/four.jpg')] bg-center bg-cover w-full text-gray-100 overflow-hidden ">
              <div className=" py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl p-2 sm:p-5 mx-auto">
                  <div className=" order-2 md:order-1 px-5">
                    <h2 className="font-bold pe-2 text-2xl md:text-3xl lg:text-4xl mb-4 font-sans">
                      {" "}
                      Meet our Popular Investors
                    </h2>{" "}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight font-sans">
                      our company’s Popular Investor Program recognises
                      talented, savvy, responsible traders who share their
                      knowledge. Our top-tier Popular Investors earn up to 2%
                      annually on their assets under management.
                    </h1>
                    <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
                      Popular Investor Program{" "}
                    </button>{" "}
                    <div>
                      <p className="text-xs text-gray-300 max-w-96">
                        Past performance is not an indication of future results.
                        This is not investment advice. Your capital is at risk.
                      </p>
                    </div>
                    
                    <div className="sm:flex gap-4 mt-5">
                      <div className="bg-hBlue grid place-content-center p-4 w-fit mb-2">
                        <FaPlay  className="text-3xl"/>
                      </div>
                      <div className="flex flex-col justify-end  h-full">
                      <h1 className="text-xl md:text-2xl  font-extralight font-sans">GOODGOING
                    </h1>
                    <p className="text-sm">FROM  UNITED KINGDOM</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-10 sm:px-5 order-1 md:order-2"></div>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
