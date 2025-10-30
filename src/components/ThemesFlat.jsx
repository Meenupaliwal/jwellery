import React from "react";
import boxImage8 from "../images/section/box-image-8.jpg";
import boxImage9 from "../images/section/box-image-9.jpg";

const ThemesFlat = () => {
  return (
    <div className="themesFlat">
      <div className="container">
        <div className="tf-grid-layout lg-col-2">
          {/* Box 1 */}
          <div className="box-image_V02 type-space-3 hover-img">
            <a href="/shop-default" className="box-image_image img-style">
              <img
                src={boxImage8}
                data-src={boxImage8}
                alt="Diamond Jewelry"
                className="lazyload"
              />
            </a>
            <div className="box-image_content wow fadeInUp">
              <span className="sub-text h4 text-white mb-8">Sale OFF 2%</span>
              <a
                href="/shop-default"
                className="title link text-display-2 fw-medium text-white"
              >
                Diamond Jewelry
              </a>
              <a
                href="/shop-default"
                className="tf-btn btn-white animate-btn animate-dark"
              >
                Shop now
                <i className="icon icon-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box-image_V02 type-space-3 hover-img">
            <a href="/shop-default" className="box-image_image img-style">
              <img
                src={boxImage9}
                data-src={boxImage9}
                alt="Birthstone Jewelry"
                className="lazyload"
              />
            </a>
            <div className="box-image_content wow fadeInUp">
              <span className="sub-text h4 text-white mb-8">
                Get our 5% OFF coupon
              </span>
              <a
                href="/shop-default"
                className="title link text-display-2 fw-medium text-white"
              >
                Birthstone Jewelry
              </a>
              <a
                href="/shop-default"
                className="tf-btn btn-white animate-btn animate-dark"
              >
                Shop now
                <i className="icon icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemesFlat;
