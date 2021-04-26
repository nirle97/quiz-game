import React from "react";
import { Redirect } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inside-container">
        <a href="https://github.com/nirle97">Nir Levy</a>
        <a href="https://github.com/TomerNissim">Tomer Nissim</a>
        <a href="https://github.com/benhanover">Ben Hanover</a>
      </div>
    </div>
  );
}

export default Footer;
