import React from "react";
import { Link } from "react-router-dom";

const SidebarFilter = () => {
  return (
    <div className="col-xl-3">
      <div className="canvas-sidebar sidebar-filter canvas-filter left">
        <div className="canvas-wrapper">
          {/* Header (for small screens) */}
          <div className="canvas-header d-xl-none">
            <span className="title h3 fw-medium">Filter</span>
            <span className="icon-close link icon-close-popup fs-24 close-filter"></span>
          </div>

          {/* Sidebar body */}
          <div className="canvas-body">
            {/* Category Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#category"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="category"
              >
                <span className="h4 fw-semibold">Category</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="category" className="collapse show">
                <ul className="collapse-body filter-group-check group-category">
                  {[
                    { name: "T-shirts", count: 23 },
                    { name: "Footwear", count: 44 },
                    { name: "Shirts", count: 75 },
                    { name: "Dresses", count: 33 },
                    { name: "Underwear", count: 45 },
                    { name: "Accessories", count: 32 },
                  ].map((item, index) => (
                    <li className="list-item" key={index}>
                      <Link to="/product" className="link h6">
                        {item.name}
                        <span className="count">{item.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#availability"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="availability"
              >
                <span className="h4 fw-semibold">Availability</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="availability" className="collapse show">
                <ul className="collapse-body filter-group-check current-scrollbar">
                  <li className="list-item">
                    <input
                      type="radio"
                      name="availability"
                      className="tf-check"
                      id="inStock"
                    />
                    <label htmlFor="inStock" className="label">
                      <span>In Stock</span>
                      <span className="count">23</span>
                    </label>
                  </li>
                  <li className="list-item disabled">
                    <input
                      type="radio"
                      name="availability"
                      className="tf-check"
                      id="outStock"
                    />
                    <label htmlFor="outStock" className="label">
                      <span>Out of Stock</span>
                      <span className="count">34</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#price"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="price"
              >
                <span className="h4 fw-semibold">Price</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="price" className="collapse show">
                <div className="collapse-body widget-price filter-price">
                  <div
                    className="price-val-range"
                    id="price-value-range"
                    data-min="0"
                    data-max="500"
                  ></div>
                  <div className="box-value-price">
                    <span className="h6 text-main">Price:</span>
                    <div className="price-box">
                      <div
                        className="price-val"
                        id="price-min-value"
                        data-currency="$"
                      ></div>
                      <span>-</span>
                      <div
                        className="price-val"
                        id="price-max-value"
                        data-currency="$"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#brand"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="brand"
              >
                <span className="h4 fw-semibold">Brand</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="brand" className="collapse show">
                <ul className="collapse-body filter-group-check current-scrollbar">
                  {[
                    "AUTOMET",
                    "Trendy Queen",
                    "WIHOLL",
                    "Real Essentials",
                    "Dokotoo",
                    "Hanes",
                    "Zeagoo",
                    "SHEWIN",
                    "Blooming Jelly",
                    "Fisoew",
                  ].map((brand, index) => (
                    <li className="list-item" key={index}>
                      <input
                        type="checkbox"
                        name="brand"
                        className="tf-check"
                        id={brand.toLowerCase().replace(/\s+/g, "-")}
                      />
                      <label
                        htmlFor={brand.toLowerCase().replace(/\s+/g, "-")}
                        className="label"
                      >
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Size Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#size"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="size"
              >
                <span className="h4 fw-semibold">Size</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="size" className="collapse show">
                <div className="collapse-body filter-size-box flat-check-list">
                  {["XS", "S", "L", "M", "XL", "2XL", "Over size"].map(
                    (size, i) => (
                      <div
                        className={`check-item size-item size-check ${
                          size === "Over size" ? "over-size" : ""
                        }`}
                        key={i}
                      >
                        <span className="size h6">{size}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Color Filter */}
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#color"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="color"
              >
                <span className="h4 fw-semibold">Color</span>
                <span className="icon icon-caret-down fs-20"></span>
              </div>
              <div id="color" className="collapse show">
                <div className="collapse-body filter-color-box flat-check-list">
                  {[
                    { color: "bg-light-purple", name: "Purple" },
                    { color: "bg-dark-charcoal", name: "Dark" },
                    { color: "bg-dark-jade", name: "Green" },
                    { color: "bg-light-beige", name: "Beige" },
                    { color: "bg-sage-green", name: "Sage Green" },
                    { color: "bg-tomato", name: "Light Orange" },
                    { color: "bg-honey-orange", name: "Orange" },
                    { color: "bg-dark-olive", name: "Dark Olive" },
                    { color: "bg-hot-pink", name: "Pink" },
                    { color: "bg-muted-violet", name: "Dark Violet" },
                    { color: "bg-dusty-olive", name: "Dusty Olive" },
                  ].map((item, i) => (
                    <div className="check-item color-item color-check" key={i}>
                      <span className={`color ${item.color}`}></span>
                      <span className="color-text">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Banner Section */}
            <div className="sb-banner hover-img">
              <Link to="/blog-detail" className="image img-style d-inline-flex">
                <img
                  src="images/blog/side-banner.jpg"
                  alt="Banner"
                  className="lazyload"
                />
              </Link>
              <div className="content">
                <h5 className="sub-title text-primary">Sale Upto 45%</h5>
                <h2 className="fw-semibold title">
                  <Link to="#" className="text-white link">
                    Fall winter collection
                  </Link>
                </h2>
                <Link
                  to="/product"
                  className="tf-btn btn-white animate-btn animate-dark"
                >
                  Shop now <i className="icon icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Reset (for mobile) */}
          <div className="canvas-bottom d-xl-none">
            <button id="reset-filter" className="tf-btn btn-reset">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
