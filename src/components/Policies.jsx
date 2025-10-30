import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Policies = () => {
  return (
    <div className="flat-spacing">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={97}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 13 },
            576: { slidesPerView: 2, spaceBetween: 13 },
            768: { slidesPerView: 3, spaceBetween: 33 },
            1200: { slidesPerView: 4, spaceBetween: 97 },
          }}
          className="tf-swiper"
        >
          {/* Item 1 */}
          <SwiperSlide>
            <div className="box-icon_V01 wow fadeInLeft">
              <span className="icon">
                <i className="icon-package"></i>
              </span>
              <div className="content">
                <h4 className="title fw-normal">30 days return</h4>
                <p className="text">30 day money back guarantee</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Item 2 */}
          <SwiperSlide>
            <div className="box-icon_V01 wow fadeInLeft" data-wow-delay="0.1s">
              <span className="icon">
                <i className="icon-calender"></i>
              </span>
              <div className="content">
                <h4 className="title fw-normal">3 year warranty</h4>
                <p className="text">Manufacturer's defect</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Item 3 */}
          <SwiperSlide>
            <div className="box-icon_V01 wow fadeInLeft" data-wow-delay="0.2s">
              <span className="icon">
                <i className="icon-boat"></i>
              </span>
              <div className="content">
                <h4 className="title fw-normal">Free shipping</h4>
                 <p className="text">Free Shipping for orders over ₹150</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Item 4 */}
          <SwiperSlide>
            <div className="box-icon_V01 wow fadeInLeft" data-wow-delay="0.3s">
              <span className="icon">
                <i className="icon-headset"></i>
              </span>
              <div className="content">
                <h4 className="title fw-normal">Online support</h4>
                <p className="text">24 hours a day, 7 days a week</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Policies;
