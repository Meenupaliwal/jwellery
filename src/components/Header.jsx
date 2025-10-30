import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const jewelleryCategories = [
    "Gold Kundan Jewellery",
    "Meena Jewellery",
    "Polki Jewellery",
    "Jadau Jewellery",
    "22 Karat Gold Jewellery",
    "18 Karat Gold Jewellery",
    "14 Karat Gold Jewellery",
    "24 Karat Gold Ornaments (Pure Gold – mostly coins, bars)",
  ];

  const artificialJewellery = [
    "Kundan Jewellery",
    "Antique jewellery",
    "Ad jewellery",
    "Rajputi jewellery",
    "1 gram gold jewellery",
    "Bridal set, sale and rent both",
    "Handmade Traditional Jewellery",
    "Antique Gold Jewellery",
    "Matte Finish Gold Jewellery",
    "Temple Jewellery",
  ];

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Black Bar */}
      <div className="tf-topbar bg-black">
        <div className="container-full">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="topbar-left">
                <h6 className="text-up text-white fw-normal text-line-clamp-1">
                  Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h6>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <ul className="topbar-right topbar-option-list">
                <li className="h6"><Link to="/faq" className="text-white link">Help & FAQs</Link></li>
                <li className="br-line"></li>
                <li className="h6"><Link to="/factory" className="text-white link">Factory</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className={`tf-header header-fix header-abs-1 ${isSticky ? "sticky" : ""}`}>
        <div className="container-full">
          <div className="row align-items-center">
            
            {/* Mobile Menu Button */}
            <div className="col-md-4 col-3 d-xl-none">
              <button
                className="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span></span>
              </button>
            </div>

            {/* ✅ Logo linked to Home */}
            <div className="col-xl-3 col-md-4 col-6 d-flex justify-content-center justify-content-xl-start">
              <Link to="/" className="logo-site">
                <img src="images/logo/logo.svg" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="col-xl-6 d-none d-xl-block">
              <nav className="box-navigation">
                <ul className="box-nav-menu">
                  {/* ✅ HOME link fixed */}
                  <li className="menu-item">
                    <Link to="/" className="item-link">HOME</Link>
                  </li>

                  {/* PRODUCT menu */}
                  <li
                    className="menu-item"
                    onMouseEnter={() => setProductMenuOpen(true)}
                    onMouseLeave={() => setProductMenuOpen(false)}
                  >
                    <Link to="/product" className="item-link">
                      PRODUCT <i className="icon icon-caret-down"></i>
                    </Link>
                    {productMenuOpen && (
                      <div className="sub-menu mega-menu">
                        <div className="container">
                          <div className="row">
                            <div className="col-4">
                              <h4 className="menu-heading">Jewellery</h4>
                              <ul className="sub-menu_list">
                                {jewelleryCategories.map((item, i) => (
                                  <li key={i}>
                                    <Link to={`/shop-${item.toLowerCase().replace(/\s+/g, "-")}`} className="sub-menu_link">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-4">
                              <h4 className="menu-heading">Artificial Jewellery</h4>
                              <ul className="sub-menu_list">
                                {artificialJewellery.map((item, i) => (
                                  <li key={i}>
                                    <Link to={`/shop-${item.toLowerCase().replace(/\s+/g, "-")}`} className="sub-menu_link">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="list-hor">
                                <li className="wg-cls hover-img">
                                  <Link to="/shop-default" className="image img-style">
                                    <img src="images/collections/cls-header-1.jpg" alt="Collection" />
                                  </Link>
                                  <div className="cls-content">
                                    <h4 className="tag_cls">Kurtis</h4>
                                    <span className="br-line type-vertical"></span>
                                    <Link to="/product" className="tf-btn-line">Shop Now</Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* About and Contact */}
                  <li className="menu-item"><Link to="/about" className="item-link">ABOUT US</Link></li>
                  <li className="menu-item"><Link to="/contact" className="item-link">CONTACT</Link></li>
                </ul>
              </nav>
            </div>

            {/* Right Icons */}
            <div className="col-xl-3 col-md-4 col-3">
              <ul className="nav-icon-list">
                <li className="d-none d-lg-flex"><Link to="/login" className="nav-icon-item link"><i className="icon icon-user"></i></Link></li>
                <li className="d-none d-md-flex"><a href="#search" className="nav-icon-item link"><i className="icon icon-magnifying-glass"></i></a></li>
                <li className="d-none d-sm-flex"><Link to="/wishlist" className="nav-icon-item link"><i className="icon icon-heart"></i></Link></li>
                <li className="shop-cart"><a href="#shoppingCart" className="nav-icon-item link"><i className="icon icon-shopping-cart-simple"></i></a><span className="count">24</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-offcanvas ${mobileMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>×</button>
          <ul className="mobile-nav-menu">
            {/* ✅ HOME Link fixed */}
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>

            <li>
              <Link
                to="/product"
                className="submenu-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setProductMenuOpen(!productMenuOpen);
                }}
              >
                PRODUCT <i className="icon icon-caret-down"></i>
              </Link>
              {productMenuOpen && (
                <ul className="mobile-submenu">
                  {jewelleryCategories.map((item, i) => (
                    <li key={i}>
                      <Link to={`/shop-${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setMobileMenuOpen(false)}>
                        {item}
                      </Link>
                    </li>
                  ))}
                  {artificialJewellery.map((item, i) => (
                    <li key={i}>
                      <Link to={`/shop-${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setMobileMenuOpen(false)}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>

        {/* Sticky + Mobile Styles */}
        <style jsx>{`
          .sticky {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 999;
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .mobile-offcanvas {
            position: fixed;
            top: 0;
            left: -100%;
            width: 270px;
            height: 100%;
            background: white;
            box-shadow: 2px 0 5px rgba(0,0,0,0.2);
            transition: left 0.3s ease-in-out;
            z-index: 9999;
            padding: 20px;
          }
          .mobile-offcanvas.open {
            left: 0;
          }
          .close-btn {
            font-size: 24px;
            border: none;
            background: none;
            cursor: pointer;
            margin-bottom: 20px;
          }
          .mobile-nav-menu li {
            margin-bottom: 15px;
          }
          .mobile-submenu li {
            margin-left: 10px;
            margin-bottom: 10px;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
