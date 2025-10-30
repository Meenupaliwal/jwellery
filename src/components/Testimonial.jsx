import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    image: "images/products/jewelry/product-5.jpg",
    productName: "Silver Diamond Ring",
    price: "$14,99",
    title: "Dedicated service",
    text: "The support from ACIS has been outstanding. Anytime we had a question or needed help, their team responded quickly and professionally.",
    author: "Brooklyn Simmons",
  },
  {
    id: 2,
    image: "images/products/jewelry/product-9.jpg",
    productName: "Eternity Engagement Ring",
    price: "$19,99",
    title: "Exceptional Reliability",
    text: "No surprises, just consistent and dependable performance every single time without fail.",
    author: "Mas Shin",
  },
  {
    id: 3,
    image: "images/products/jewelry/product-5.jpg",
    productName: "UrbanCool Work Shirt",
    price: "$14,99",
    title: "Best Product Quality",
    text: "The build quality is excellent and everything works smoothly. I can feel the difference compared to other brands.",
    author: "Sil Vox",
  },
];

const Testimonial = () => {
  return (
    <section className="flat-spacing">
      <div className="container">
        {/* Section Title */}
        <div className="sect-title type-2 d-flex justify-content-between align-items-center flex-wrap">
          <div className="flex-sm-1 wow fadeInUp">
            <h1 className="s-title mb-2">Customer Reviews</h1>
            <p className="s-subtitle h6">
              Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="group-btn-slider wow fadeInUp" data-wow-delay="0.1s">
            <div className="tf-sw-nav style-2 type-small nav-prev-swiper">
              <i className="icon icon-caret-left"></i>
            </div>
            <div className="tf-sw-nav style-2 type-small nav-next-swiper">
              <i className="icon icon-caret-right"></i>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={2}
          navigation={{
            nextEl: ".nav-next-swiper",
            prevEl: ".nav-prev-swiper",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 2, spaceBetween: 48 },
          }}
          className="tf-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-V02 type-space-2 hover-img wow fadeInUp">
                {/* Product Info */}
                <div className="tes_product">
                  <div className="product-image img-style">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="img-fluid"
                    />
                  </div>
                  <div className="product-infor">
                    <h5 className="prd_name fw-normal">
                      <a href="product-detail.html" className="link">
                        {item.productName}
                      </a>
                    </h5>
                    <h6 className="prd_price">{item.price}</h6>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="tes_content">
                  <div className="tes_icon">
                    <i className="icon icon-block-quote"></i>
                  </div>
                  <h4 className="tes_title">{item.title}</h4>
                  <p className="tes_text h4">“ {item.text} “</p>

                  <div className="tes_author d-flex align-items-center gap-2">
                    <p className="author-name h4 mb-0">{item.author}</p>
                    <i className="author-verified icon-check-circle fs-24"></i>
                  </div>

                  <div className="rate_wrap">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icon-star text-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
