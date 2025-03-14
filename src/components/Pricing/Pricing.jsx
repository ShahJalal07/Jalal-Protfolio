import React from "react";
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";
const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section_title">Pricing Plans</h2>
      <div className="pricing_container grid">
        <div className="pricing_item">
          <img src={Image1} className="pricing_img" alt="" />

          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">
            A Simple Option powerfull To manage Your Business
          </p>
          <p className="pricing_support">Email Support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
        <div className="pricing_item best">
          <span className="badge">Recommanded</span>
          <img src={Image2} className="pricing_img" alt="" />

          <h3 className="pricing_plan">Premium</h3>
          <p className="pricing_title">
            Unlimited Product Including and Morer Features.
          </p>
          <p className="pricing_support">Mon - Fri Support</p>
          <h3 className="price">
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
        <div className="pricing_item">
          <img src={Image3} className="pricing_img" alt="" />

          <h3 className="pricing_plan">Ultimate</h3>
          <p className="pricing_title">
            A Wise Option For Large Companies and Individuals{" "}
          </p>
          <p className="pricing_support">24/7 Support</p>
          <h3 className="price">
            <em>$</em> 19 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
