import React from "react";
import logo from "./Images/logo.svg";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused with a
            modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">Order online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address: 303 10th Cross, Hulimavu Lake Rd, near Chavadi restaurant,<br/> Bengaluru, Karnataka 560076</li>
                <li>Phone Number:+919535443020</li>
                <li>Email:salaudeensalu@gmail.com</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
            </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
