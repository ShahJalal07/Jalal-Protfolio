import React from "react";
import "./Testimonial.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    title: "Frontend Developer",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 2,
    image: Image3,
    name: "John Doe",
    title: "Frontend Developer",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial_container section">
      <h2 className="section_title">Clients & Reviews</h2>

      <div className="testimonial grid">
        {data.map(({ id, image, name, title, subtitle, comment }) => {
          return (
            <div className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>

              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
