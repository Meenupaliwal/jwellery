import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const categories = [
  { title: "Women", image: "images/category/cate-shop-1.jpg", link: "/shop-default" },
  { title: "Men", image: "images/category/cate-shop-2.jpg", link: "/shop-default" },
  { title: "Accessories", image: "images/category/cate-shop-3.jpg", link: "/shop-default" },
  { title: "Dress", image: "images/category/cate-shop-4.jpg", link: "/shop-default" },
  { title: "Bras", image: "images/category/cate-shop-5.jpg", link: "/shop-default" },
];

const CategorySlider = () => {
  return (
    <div className="flat-spacing pb-0">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={5}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 5, spaceBetween: 40 },
            992: { slidesPerView: 4, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 12 },
            576: { slidesPerView: 2, spaceBetween: 12 },
          }}
          className="tf-swiper"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="box-image_category style-2 hover-img">
                <Link to={cat.link} className="box-image_image img-style">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                </Link>
                <div className="box-image_content">
                  <Link
                    to={cat.link}
                    className="tf-btn btn-white animate-btn animate-dark"
                  >
                    <span className="h5 fw-medium">{cat.title}</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
