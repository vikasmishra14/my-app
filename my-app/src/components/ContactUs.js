import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
   <div className="contact-wrapper"> 

    <div className="contact-container">
      <h2 className="fade-in">Contact Us</h2>
      <p className="fade-in">We'd love to hear your feedback!</p>
      {submitted && <p className="success-message slide-in">Thank you for your message!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input-field"
        />
        {errors.name && <p className="error-message shake">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-field"
        />
        {errors.email && <p className="error-message shake">{errors.email}</p>}

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input-field"
        ></textarea>
        {errors.message && <p className="error-message shake">{errors.message}</p>}

        <button type="submit" className="submit-btn bounce">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
