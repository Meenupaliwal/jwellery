import React from "react";


const Footer = () => {
  return (
    <footer className="tf-footer style-4">
      <div className="container d-flex">
        <span className="br-line"></span>
      </div>

      {/* Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="row">

            {/* Contact Us */}
            <div className="col-xl-3 col-sm-6 mb_30 mb-xl-0">
              <div className="footer-col-block">
                <p className="footer-heading footer-heading-mobile">Contact us</p>
                <div className="tf-collapse-content">
                  <ul className="footer-contact">
                    <li>
                      <i className="icon icon-map-pin"></i>
                      <span className="br-line"></span>
                      <a
                        href="https://www.google.com/maps?q=8500+Lorem+Street+Chicago,+IL+55030+Dolor+sit+amet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h6 link"
                      >
                        8500 Lorem Street Chicago, IL 55030 <br className="d-none d-lg-block" />
                        Dolor sit amet
                      </a>
                    </li>
                    <li>
                      <i className="icon icon-phone"></i>
                      <span className="br-line"></span>
                      <a href="tel:+88001234567" className="h6 link">9414058509</a>
                    </li>
                    <li>
                      <i className="icon icon-envelope-simple"></i>
                      <span className="br-line"></span>
                      <a href="mailto:narayanijewells@gmail.com" className="h6 link">narayanijewells@gmail.com</a>
                    </li>
                  </ul>

                  <div className="social-wrap">
                    <ul className="tf-social-icon">
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-facebook">
                          <span className="icon"><i className="icon-fb"></i></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-instagram">
                          <span className="icon"><i className="icon-instagram-logo"></i></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-x">
                          <span className="icon"><i className="icon-x"></i></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-tiktok">
                          <span className="icon"><i className="icon-tiktok"></i></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping */}
            <div className="col-xl-2 col-sm-6 mb_30 mb-xl-0">
              <div className="footer-col-block footer-wrap-1 ms-xl-auto">
                <p className="footer-heading footer-heading-mobile">Shopping</p>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li><a href="faq.html" className="link h6">Injila Shipping</a></li>
                    <li><a href="shop-default.html" className="link h6">Shop by Brand</a></li>
                    <li><a href="track-order.html" className="link h6">Track order</a></li>
                    <li><a href="faq.html" className="link h6">Terms & Conditions</a></li>
                    <li><a href="wishlist.html" className="link h6">My Wishlist</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="col-xl-3 col-sm-6 mb_30 mb-sm-0">
              <div className="footer-col-block footer-wrap-2 mx-xl-auto">
                <p className="footer-heading footer-heading-mobile">Information</p>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li><a href="about.html" className="link h6">About Us</a></li>
                    <li><a href="faq.html" className="link h6">Term & Policy</a></li>
                    <li><a href="faq.html" className="link h6">Help Center</a></li>
                    <li><a href="faq.html" className="link h6">Refunds</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-xl-4 col-sm-6">
              <div className="footer-col-block">
                <p className="footer-heading footer-heading-mobile">Let’s keep in touch</p>
                <div className="tf-collapse-content">
                  <div className="footer-newsletter">
                    <p className="h6 caption">
                      Enter your email below to be the first to know about new collections and product launches.
                    </p>
                    <form className="form_sub has_check" id="subscribe-form">
                      <div className="f-content" id="subscribe-content">
                        <fieldset className="col">
                          <input className="style-stroke" id="subscribe-email" type="email" name="email-form" placeholder="Enter your email" required />
                        </fieldset>
                        <button id="subscribe-button" type="button" className="tf-btn animate-btn type-small-2">
                          Subscribe <i className="icon icon-arrow-right"></i>
                        </button>
                      </div>
                      <div className="checkbox-wrap">
                        <input id="remember" type="checkbox" className="tf-check style-3" />
                        <label htmlFor="remember" className="h6">
                          By clicking subscribe, you agree to the&nbsp;
                          <a href="faq.html" className="text-decoration-underline link">Terms of Service</a> and <a href="faq.html" className="text-decoration-underline link">Privacy Policy</a>.
                        </label>
                      </div>
                      <div id="subscribe-msg"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-bottom d-flex justify-content-between flex-wrap align-items-center">
            <ul className="list-hor">
              <li><a href="#" className="h6 link">Help & FAQs</a></li>
              <li className="br-line type-vertical"></li>
              <li><a href="#" className="h6 link">Factory</a></li>
            </ul>

            <div className="list-hor flex-wrap align-items-center">
              <span className="h6">Payment:</span>
              <ul className="payment-method-list">
                <li><img src="images/payment/visa.png" alt="Payment" /></li>
                <li><img src="images/payment/master-card.png" alt="Payment" /></li>
                <li><img src="images/payment/amex.png" alt="Payment" /></li>
                <li><img src="images/payment/discover.png" alt="Payment" /></li>
                <li><img src="images/payment/paypal.png" alt="Payment" /></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
