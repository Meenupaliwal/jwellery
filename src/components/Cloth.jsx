import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Section image
import boxImage1 from "../images/section/box-image-1.jpg";

// Product images
import product23 from "../images/products/product-23.jpg";
import product24 from "../images/products/product-24.jpg";
import product25 from "../images/products/product-25.jpg";
import product26 from "../images/products/product-26.jpg";
import product27 from "../images/products/product-27.jpg";
import product28 from "../images/products/product-28.jpg";
import product29 from "../images/products/product-29.jpg";

const Cloth = () => {
  return (
    <div className="themesFlat flat-spacing">
      <div className="container-full">
        {/* ---------- Section Title ---------- */}
        <div className="h1 sect-title text-black fw-medium text-center wow fadeInUp">
          Kurties Shop
            <p className="s-subtitle h6">
    Discover our latest collection of stylish kurties, perfect for every occasion!
  </p>
        </div>

        <div className="row">
          {/* ---------- Left Side Box Image ---------- */}
          <div className="col-xl-4">
            <div className="box-image_V01 hover-img mb-xl-0 wow fadeInUp">
              <a href="/shop-default" className="box-image_image img-style">
                <img src={boxImage1} alt="Lookbook" className="lazyload" />
              </a>
              <div className="box-image_content">
                <a
                  href="/shop-default"
                  className="title text-display fw-semibold text-white link"
                >
                  Lookbook
                </a>
                <span className="sub-title h5 text-white">347 products</span>
                <a href="/shop-default" className="tf-btn-line style-white">
                  EXPLORE NOW
                </a>
              </div>
            </div>
          </div>

          {/* ---------- Right Side Swiper Products ---------- */}
          <div className="col-xl-8">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="tf-swiper wrap-sw-over wow fadeInUp"
            >
              {/* ---------- Product 1 ---------- */}
              <SwiperSlide>
                <div className="card-product">
                  <div className="card-product_wrapper">
                    <a href="/product-detail" className="product-img">
                      <img src={product23} alt="Product" className="img-product" />
                      <img src={product24} alt="Product hover" className="img-hover" />
                    </a>

                    {/* Action Buttons */}
                    <ul className="product-action_list">
                      <li>
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-shopping-cart-simple"></span>
                          <span className="tooltip">Add to cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="#;" className="hover-tooltip tooltip-left box-icon">
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick view</span>
                        </a>
                      </li>
                    </ul>

                    {/* Badge */}
                    <ul className="product-badge_list">
                      <li className="product-badge_item h6 hot">Hot</li>
                    </ul>
                  </div>

                  {/* Info */}
                  <div className="card-product_info">
                    <a href="/product-detail" className="name-product h4 link">
                      V-neck button down vest
                    </a>
                    <div className="price-wrap">
                      <span className="price-old h6 fw-normal">$99.99</span>
                      <span className="price-new h6">$69.99</span>
                    </div>

                    {/* Colors */}
                    <ul className="product-color_list">
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Beige</span>
                        <span className="swatch-value bg-light-beige"></span>
                        <img src={product23} alt="Beige" />
                      </li>
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Dark</span>
                        <span className="swatch-value bg-dark-charcoal"></span>
                        <img src={product25} alt="Dark" />
                      </li>
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Sage Green</span>
                        <span className="swatch-value bg-sage-green"></span>
                        <img src={product26} alt="Sage Green" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              {/* ---------- Product 2 ---------- */}
              <SwiperSlide>
                <div className="card-product">
                  <div className="card-product_wrapper">
                    <a href="/product-detail" className="product-img">
                      <img src={product27} alt="Product" className="img-product" />
                      <img src={product28} alt="Product hover" className="img-hover" />
                    </a>

                    {/* Action Buttons */}
                    <ul className="product-action_list">
                      <li>
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-shopping-cart-simple"></span>
                          <span className="tooltip">Add to cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="#;" className="hover-tooltip tooltip-left box-icon">
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick view</span>
                        </a>
                      </li>
                    </ul>

                    {/* Badge */}
                    <ul className="product-badge_list">
                      <li className="product-badge_item flash-sale">
                        <i className="icon icon-thunder"></i> Flash sale
                      </li>
                    </ul>
                  </div>

                  {/* Info */}
                  <div className="card-product_info">
                    <a href="/product-detail" className="name-product h4 link">
                      Nike Sportswear Tee Shirts
                    </a>
                    <div className="price-wrap">
                      <span className="price-old h6 fw-normal">$89.99</span>
                      <span className="price-new h6">$59.99</span>
                    </div>

                    {/* Colors */}
                    <ul className="product-color_list">
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Beige</span>
                        <span className="swatch-value bg-light-beige"></span>
                        <img src={product27} alt="Beige" />
                      </li>
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Violet</span>
                        <span className="swatch-value bg-muted-violet"></span>
                        <img src={product29} alt="Violet" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
                            <SwiperSlide>
                <div className="card-product">
                  <div className="card-product_wrapper">
                    <a href="/product-detail" className="product-img">
                      <img src={product27} alt="Product" className="img-product" />
                      <img src={product28} alt="Product hover" className="img-hover" />
                    </a>

                    {/* Action Buttons */}
                    <ul className="product-action_list">
                      <li>
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-shopping-cart-simple"></span>
                          <span className="tooltip">Add to cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="#;" className="hover-tooltip tooltip-left box-icon">
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick view</span>
                        </a>
                      </li>
                    </ul>

                    {/* Badge */}
                    <ul className="product-badge_list">
                     <li className="product-badge_item h6 trend">
                        <i className="icon icon-thunder"></i> Trending
                      </li>
                      
                    </ul>
                  </div>

                  {/* Info */}
                  <div className="card-product_info">
                    <a href="/product-detail" className="name-product h4 link">
                      Nike Sportswear Tee Shirts
                    </a>
                    <div className="price-wrap">
                      <span className="price-old h6 fw-normal">$89.99</span>
                      <span className="price-new h6">$59.99</span>
                    </div>

                    {/* Colors */}
                    <ul className="product-color_list">
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Beige</span>
                        <span className="swatch-value bg-light-beige"></span>
                        <img src={product27} alt="Beige" />
                      </li>
                      <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Violet</span>
                        <span className="swatch-value bg-muted-violet"></span>
                        <img src={product29} alt="Violet" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloth;
