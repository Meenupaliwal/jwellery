import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; // ✅ correct import path
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "../index.css";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Artificial Jewelry <br /> Collection",
      subtitle: "A diverse collection of artificial jewelry to suit every style and occasion.",
      img: "images/slider/slider-24.jpg",
      link: "shop-default-list.html",
    },
    {
      id: 2,
      title: "Jewelry <br class='d-sm-none' /> Collection",
      subtitle: "A diverse collection of  jewelry to suit every style and occasion",
      img: "images/slider/slider-22.jpg",
      link: "shop-default-list.html",
    },
    {
      id: 3,
      title: "Kurtis <br class='d-sm-none' /> Series",
      subtitle: "Stylish and comfortable kurtis that complement our jewelry collections.",
      img: "images/slider/slider-3.jpg",
      link: "shop-default-list.html",
    },
  ];

  return (
    <div className="tf-slideshow type-abs tf-btn-swiper-main hover-sw-nav">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]} // ✅ now correct
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".nav-next-swiper",
          prevEl: ".nav-prev-swiper",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-wrap">
              <div className="sld_image">
                <img src={slide.img} alt="Slide" className="lazyload" />
              </div>
              <div className="sld_content">
                <div className="container">
                  <div className="content-sld_wrap">
                    <h1
                      className="title_sld text-white text-display fade-item fade-item-1"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="sub-text_sld h5 text-white fade-item fade-item-2">
                      {slide.subtitle}
                    </p>
                    <div className="fade-item fade-item-3">
                      <a href={slide.link} className="tf-btn animate-btn color-gold fw-semibold">
                        Shop now <i className="icon icon-arrow-right color-gold"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="tf-sw-nav nav-prev-swiper">
        <i className="icon icon-caret-left"></i>
      </div>
      <div className="tf-sw-nav nav-next-swiper">
        <i className="icon icon-caret-right"></i>
      </div>
    </div>
  );
};

export default Slider;
