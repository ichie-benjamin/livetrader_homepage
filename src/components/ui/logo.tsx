// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import {  Autoplay } from "swiper/modules";

export default function Logo() {
  return (
    <>
      <Swiper
        slidesPerView={9} // Set the number of visible slides per view to 11
        spaceBetween={30} // Space between slides
        pagination={{
          clickable: true, // Enable clickable pagination
        }}
        autoplay={{
          delay: 3000, // Autoplay slides every 3 seconds
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        modules={[ Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-diners.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            src="/equitymarketspro/logo/logo-mastercard.png"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-neteller.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-paypal.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-skrill.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-unionpay.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-visa.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-webmoney.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/equitymarketspro/logo/logo-yandex.png" alt="" />
        </div>
      </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-diners.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/equitymarketspro/logo/logo-mastercard.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-neteller.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-paypal.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-skrill.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-unionpay.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-visa.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-webmoney.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/equitymarketspro/logo/logo-yandex.png" alt="" />
          </div>
        </SwiperSlide>
        {/* Add more slides if needed */}
      </Swiper>
    </>
  );
}
