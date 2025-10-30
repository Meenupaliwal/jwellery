import React, { useState } from "react";

const ShopControl = () => {
  const [sortValue, setSortValue] = useState("Best Selling");
  const [activeLayout, setActiveLayout] = useState("tf-col-3");
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  // handle sorting
  const handleSortChange = (value, label) => {
    setSortValue(label);
    // you can also call a parent callback here to apply sorting
  };

  // handle layout switch
  const handleLayoutChange = (layout) => {
    setActiveLayout(layout);
    // you can trigger layout logic here (e.g., grid or list)
  };

  return (
    <div className="tf-shop-control">
      {/* Sale Checkbox */}
      <div className="shop-sale-text d-none d-xl-flex">
        <input
          type="checkbox"
          name="sale"
          className="tf-check"
          id="sale"
          checked={showSaleOnly}
          onChange={(e) => setShowSaleOnly(e.target.checked)}
        />
        <label htmlFor="sale" className="label">
          Show only products on sale
        </label>
      </div>

      {/* Filter Button (for mobile) */}
      <div className="tf-control-filter d-xl-none">
        <button type="button" id="filterShop" className="tf-btn-filter">
          <span className="icon icon-filter"></span>
          <span className="text">Filter</span>
        </button>
      </div>

      {/* Layout Switch */}
      <ul className="tf-control-layout">
        <li
          className={`tf-view-layout-switch sw-layout-2 ${
            activeLayout === "tf-col-2" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("tf-col-2")}
        >
          <i className="icon-grid-2"></i>
        </li>
        <li
          className={`tf-view-layout-switch sw-layout-3 d-none d-md-flex ${
            activeLayout === "tf-col-3" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("tf-col-3")}
        >
          <i className="icon-grid-3"></i>
        </li>
        <li className="br-line type-vertical"></li>
        <li
          className={`tf-view-layout-switch sw-layout-list list-layout ${
            activeLayout === "list" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("list")}
        >
          <i className="icon-list"></i>
        </li>
      </ul>

      {/* Sorting Dropdown */}
      <div className="tf-control-sorting">
        <p className="h6 d-none d-lg-block">Sort by:</p>
        <div className="tf-dropdown-sort dropdown">
          <div
            className="btn-select"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="text-sort-value">{sortValue}</span>
            <span className="icon icon-caret-down"></span>
          </div>

          <div className="dropdown-menu show">
            {[
              { label: "Best Selling", value: "best-selling" },
              { label: "Alphabetically, A-Z", value: "a-z" },
              { label: "Alphabetically, Z-A", value: "z-a" },
              { label: "Price, low to high", value: "price-low-high" },
              { label: "Price, high to low", value: "price-high-low" },
            ].map((item, index) => (
              <div
                key={index}
                className={`select-item ${
                  sortValue === item.label ? "active" : ""
                }`}
                onClick={() => handleSortChange(item.value, item.label)}
              >
                <span className="text-value-item">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopControl;
