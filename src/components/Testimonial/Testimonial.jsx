import React from "react";
import "./Testimonial.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

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
    <section className="testimonial container section">
      <h2 className="section_title">Clients & Reviews</h2>

      <Swiper
        className="testimonials_container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}>
        {data.map(({ id, image, name, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>

              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
