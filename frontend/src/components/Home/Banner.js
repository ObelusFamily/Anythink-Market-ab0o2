import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ onInputChange }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onInputChange(search);
  }, [search, onInputChange]);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
