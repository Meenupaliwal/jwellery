import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import cls1 from "../images/collections/cls-1.jpg";
import cls2 from "../images/collections/cls-2.jpg";
import cls3 from "../images/collections/cls-3.jpg";

const CollectionSlider = () => {
  const collections = [
    { img: cls1, title: "Clothing" },
    { img: cls2, title: "Jwellery" },
    { img: cls3, title: "Artificial jewelry" },
  ];

  return (
    <div className="s-collection">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        loop={true}
        className="tf-swiper"
      >
        {collections.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="wg-cls-2 d-flex hover-img">
              <a href="shop-default.html" className="image img-style">
                <img src={item.img} alt={item.title} />
              </a>
              <div className="cls-content_wrap b-16">
                <div className="cls-content">
                  <a href="shop-default.html" className="tag_cls h3 link">
                    {item.title}
                  </a>
                  <span className="br-line type-vertical"></span>
                  <a href="shop-default.html" className="tf-btn-line text-nowrap">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dot-default tf-sw-pagination"></div>
      </Swiper>
    </div>
  );
};

export default CollectionSlider;
