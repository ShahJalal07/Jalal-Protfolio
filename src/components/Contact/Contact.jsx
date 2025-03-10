import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's Talk About Everything!</h3>
          <p className="contact_details">Don't like forms? Send me an Email.</p>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_from-div">
              <input
                type="text"
                className="contact_from-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_from-div">
              <input
                type="Email"
                className="contact_from-input"
                placeholder="Insert your Email"
              />
            </div>
          </div>

          <div className="contact_from-div">
            <input
              type="text"
              className="contact_from-input"
              placeholder="Insert your subject"
            />
          </div>
          <div className="contact_from-div contact_from-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="20"
              placeholder="Write your message"
              className="contact_from-input "></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
