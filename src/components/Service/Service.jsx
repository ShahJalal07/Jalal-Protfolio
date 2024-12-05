import React from "react";
import "./service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 3,
    image: Image3,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
];

const Service = () => {
  return (
    <section className="service container section" id="services">
      <h2 className="section_title">Service</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="service_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
