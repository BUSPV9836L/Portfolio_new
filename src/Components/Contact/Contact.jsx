import React, { useEffect, useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from "@emailjs/browser";
import { PRIMARY, SUCCESS, DANGER } from "../../Components/Alert/index";
const Contact = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const validate = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.name.trim() == "") {
      props.showAlert("Name should contain atleast two word.", DANGER);
      return;
    } else if (!emailRegex.test(form.email)) {
      props.showAlert("Please enter a valid email.", DANGER);
      return;
    } else if (form.message.trim() == "") {
      props.showAlert("Please enter message.", DANGER);
      return;
    } else if (form.phone.trim().length !== 10) {
      props.showAlert("Please enter valid phone no.", DANGER);
      return;
    } else {
      sendEmail();
    }
  };
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const sendEmail = () => {
    setIsLoading(true);
    const serviceId = import.meta.env.VITE_REACT_APP_MAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_MAILJS_TEMPLET_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_MAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      contact_number: form.phone,
    };
    console.log(templateId, serviceId, publicKey, templateParams);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if (response.text === "OK") {
          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
          setTimeout(() => {
            setIsLoading(false);
            props.showAlert("Message Sent Succesfully.", SUCCESS);
          }, 500);
        } else {
          props.showAlert("Some error occured.", DANGER);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error sending email:", error.message);
        props.showAlert("Error sending email.", DANGER);
      });
  };
  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects and also looking for
            full time oppourtinity, so feel free to send me a message about
            anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <p>bipinvishwakarma256@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 9142522705</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Ranchi, Jharkhand, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={validate} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handelOnChange}
            value={form.name}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handelOnChange}
            value={form.email}
          />
          <label htmlFor="">Your Phone</label>
          <input
            type="phone"
            placeholder="Enter your phone no"
            name="phone"
            onChange={handelOnChange}
            value={form.phone}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="2"
            placeholder="Enter your message"
            onChange={handelOnChange}
            value={form.message}
          ></textarea>
          <button
            disabled={isLoading}
            style={{ opacity: `${isLoading ? "50%" : "100%"}` }}
            type="submit"
            className="contact-submit"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
