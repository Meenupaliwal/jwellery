import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const galleryItems = [
  {
    id: 1,
    image: "images/gallery/gallery-24.jpg",
    link: "product-detail.html",
  },
  {
    id: 2,
    image: "images/gallery/gallery-25.jpg",
    link: "product-detail.html",
  },
  {
    id: 3,
    image: "images/gallery/gallery-26.jpg",
    link: "product-detail.html",
  },
  {
    id: 4,
    image: "images/gallery/gallery-27.jpg",
    link: "product-detail.html",
  },
];

const InstagramSection = () => {
  return (
    <section className="flat-spacing pb-xl-0">
      <div className="container">
        <div className="sect-title text-center wow fadeInUp">
          <h1 className="title mb-2">Shop Instagram</h1>
          <p className="s-subtitle h6">
            Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1200: { slidesPerView: 4, spaceBetween: 0 },
        }}
        className="tf-swiper wow fadeInUp"
      >
        {galleryItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="gallery-item style-2 hover-img hover-overlay">
              <div className="image img-style">
                <img
                  src={item.image}
                  alt="Instagram Product"
                  className="img-fluid"
                />
              </div>
              <a href={item.link} className="box-icon hover-tooltip">
                <span className="icon icon-instagram-logo"></span>
                <span className="tooltip">View product</span>
              </a>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="sw-dot-default tf-sw-pagination"></div>
      </Swiper>
    </section>
  );
};

export default InstagramSection;
