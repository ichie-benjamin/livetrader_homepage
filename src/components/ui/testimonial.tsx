// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";

// Import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <div className="px-2 py-5 sm:py-10 md:py-20">
        <div className="w-full flex flex-col justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extralight font-sans pb-5 sm:pb-10 md:pb-20 text-gray-700">
          <h2>
            We are only as <span className="font-bold text-center">GOOD</span>
          </h2>
          <h2>
            as our clients say WE{" "}
            <span className="font-bold text-center">ARE.</span>{" "}
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Slides will autoplay every 3 seconds
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Equity Markets Pro is great.
              </h3>
              <p className="text-lg text-brown mb-5">
                Equity Markets Pro is a fantastic trading platform, both from an
                ease of use and technical perspective.
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Christopher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Fast execution
              </h3>
              <p className="text-lg text-brown mb-5">
                I particularly enjoy the lightning speed in the execution of my
                orders on Equity Markets Pro. It’s a truly great broker with a
                great, responsive platform.
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Christopher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Impressive performance.
              </h3>
              <p className="text-lg text-brown mb-5">
                The platform has a high accuracy percentage, and its performance
                is nothing short of impressive.
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Howard</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Equity Markets Pro is great.{" "}
              </h3>
              <p className="text-lg text-brown mb-5">
                Equity Markets Pro is a fantastic trading platform, both from an
                ease of use and technical perspective.
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Christopher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Great Support.{" "}
              </h3>
              <p className="text-lg text-brown mb-5">
                The client support is just super. The agents seem to clear the
                air fast on anything that I need clarification on. Great support
                all the way.
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Matt</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-end">
                <FaQuoteRight className="text-3xl" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-brown mb-2">
                Best spreads obtainable.{" "}
              </h3>
              <p className="text-lg text-brown mb-5">
                This is a remarkable platform for trading CFDs. I have so far
                enjoyed the low spreads obtainable on this platform.{" "}
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.432L24 9.234l-6 5.832L19.336 24 12 20.015 4.664 24 6 15.066 0 9.234l8.332-1.215z" />
                    </svg>
                  ))}
              </div>
              <p className="text-md text-gray-800 font-medium">Edward</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
