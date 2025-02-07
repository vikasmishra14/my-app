import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>🌍 Map Web App | Developed by <strong>Vikas Mishra</strong></p>
      <p>📧 Email: <a href="mailto:vikasmishra9572467392@gmail.com">vikasmishra9572467392@gmail.com</a></p>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
