import React, { useState } from "react";
import "./Contact.css"; // Import the updated CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page"> {/* Add a wrapper with proper spacing */}
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          <h3>Our Address</h3>
          <p>XYZ, Jabalpur</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <h3>Phone</h3>
          <p>+91 xxxxx09475</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h3>Email</h3>
          <p>example@gmail.com</p>
        </div>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
