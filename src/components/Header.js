import React from "react";
import { Link } from "react-router-dom";
import bannerimg from "./Images/restauranfood.jpg";

function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Bay Station</h2>
          <h3> Bengaluru, Karnataka </h3>
          <p>
            This cozy café has a lake view and inviting ambiance, with green
            terrace,faint lights and relaxed music in addition to some bit's and
            refreshments
          </p>

          <Link to="/booking">
            {" "}
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerimg} alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
