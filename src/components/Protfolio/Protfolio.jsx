import React, { useState } from "react";
import "./protfolio.css";
import Menu from "./Menu";

const Protfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItems = (category) => {
    const updateItems = Menu.filter((currentItem) => {
      return currentItem.category === category;
    });
    setItems(updateItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span onClick={() => setItems(Menu)} className="work_item">
          Everything
        </span>
        <span onClick={() => filterItems("Creative")} className="work_item">
          Creative
        </span>
        <span onClick={() => filterItems("Art")} className="work_item">
          Art
        </span>
        <span onClick={() => filterItems("Design")} className="work_item">
          Design
        </span>
        <span onClick={() => filterItems("Branding")} className="work_item">
          Branding
        </span>
      </div>

      <div className="work_container grid">
        {items.map((items) => {
          const { id, image, title, category } = items;
          return (
            <div key={id} className="work_card">
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}</h3>
                <a href="#" className="work_button">
                  <i className="icon-link work_button-icon"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Protfolio;
