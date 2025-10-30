import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css"; 
import cate24 from "../images/category/cate-24.jpg";
import cate25 from "../images/category/cate-25.jpg";
import cate26 from "../images/category/cate-26.jpg";
import cate27 from "../images/category/cate-27.jpg";
import cate28 from "../images/category/cate-28.jpg";

const ShopByCategories = () => {
  const categories = [
    { img: cate24, name: "Rings", count: 27 },
    { img: cate25, name: "Earrings", count: 49 },
    { img: cate26, name: "Bracelets", count: 37 },
    { img: cate27, name: "Necklaces", count: 80 },
    { img: cate28, name: "Pendants", count: 89 },
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-title text-center wow fadeInUp">
          <h1 className="title mb-8">Jewellery</h1>
          <p className="s-subtitle h6">
            Up to 50% off Explore our sparkling collection of timeless pieces
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            576: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 32 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="tf-swiper wow fadeInUp"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <a
                href="shop-default.html"
                className="widget-collection type-space-2 hover-img"
              >
                <div className="collection_image img-style">
                  <img src={cat.img} alt={cat.name} className="lazyload" />
                </div>
                <p className="collection_name h5 link fw-semibold">
                  {cat.name}{" "}
                  <span className="count text-main-2">({cat.count})</span>
                </p>
              </a>
            </SwiperSlide>
          ))}

          <div className="sw-dot-default tf-sw-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategories;
