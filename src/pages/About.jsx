import React from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';
import Slider from "../components/Slider";

const About = () => {
  return (
    <>
      <Slider />

      <section className="container my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Discover the story behind our brand, our values, and our passion for timeless jewellery.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="images/about/about-jewellery.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-semibold">Our Journey</h3>
            <p>
              Established with love and craftsmanship, our brand celebrates the art of traditional and modern jewellery.
              Every design is created to reflect beauty, grace, and individuality.
            </p>
            <p>
              From Kundan and Polki to contemporary collections, our mission is to blend culture with creativity — bringing you
              exquisite pieces that tell a story of heritage and elegance.
            </p>
            <button className="btn btn-dark mt-3">Explore Our Collection</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
