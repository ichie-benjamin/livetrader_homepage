// Import React

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// Import required modules
import { Scrollbar, Autoplay } from "swiper/modules";

export default function Trade() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000, // Set delay to 4 seconds (4000ms)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        speed={2000} // Slow sliding effect
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-h-">
          <div className="p-5 hidden md:flex flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/tesla.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">TSLA </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-sm">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2 w-1 h-1"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-3">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-5 md:hidden flex-col gap-4">
            <div className="border border-gray-200 rounded p-5">
              <div className="flex items-center">
                <div className="rounded-full">
                  <img
                    src="/public/equitymarketspro/google.svg"
                    className="rounded-full"
                    alt=""
                  />{" "}
                </div>
                <div className=" ps-4">
                  <h2 className="text-4xl font-bold ">GOOG </h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">
                      ALPHABET INC (GOOGLE) CLASS C{" "}
                    </p>
                    <img
                      src="/public/equitymarketspro/capitalcom.svg"
                      className="rounded-full mx-2"
                      alt=""
                    />
                    <p className="text-gray-500 ">Capital.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline mt-2">
                  <h2 className="text-4xl font-bold ">
                    195.31 <sub className="text-xs">USD</sub>{" "}
                  </h2>
                  <h2 className="text-base font-semibold ps-2">
                    +2.44 <span className="ps-1">(+1.27%)</span>
                  </h2>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500">
                    .Market opens (AS OF 21:21 UTC+1)
                  </p>
                  <img
                    src="/public/equitymarketspro/capitalcom.svg"
                    className="rounded-full mx-2"
                    alt=""
                  />
                  <p className="text-gray-500 ">Capital.com</p>
                </div>
                <h2 className="font-semibold mt-3">No trades</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
