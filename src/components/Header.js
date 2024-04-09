import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBriefcase,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dribble from "../img/Dribble.png";

const Header = () => {
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setAvatarImage(storedImage);
    }
  }, []);
  return (
    <header className="bg-white-800 text-gray-500 py-2 px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={Dribble}
          alt="Logo"
          className="h-16 lg:h-20 ml-4"
          style={{ marginTop: "-0.5rem", marginBottom: "-0.5rem" }}
        />
      </div>

      <div className="flex items-center space-x-4 lg:order-2 lg:ml-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-600 pl-8 py-1 rounded"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-gray-500 absolute bottom-1 right-0 transform translate-x-1/2 translate-y-1/2 text-xs"
          />
        </div>
        <div
          className="h-8 w-8 bg-gray-600 rounded-full"
          style={{
            backgroundImage: `url(${avatarImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <button className="bg-pink-500 text-white px-3 py-1 rounded">
          Upload
        </button>
      </div>

      <nav className="w-full lg:w-auto mb-2 lg:mb-0">
        <ul className="flex justify-center lg:justify-start space-x-2 lg:space-x-4 text-sm">
        <li>
            <Link to="/">Inspiration</Link>
          </li>
          <li>
            <Link to="/">Find Work</Link>
          </li>
          <li>
            <Link to="/">Learn Design</Link>
          </li>
          <li>
            <Link to="/">Go Pro</Link>
          </li>
          <li>
            <Link to="/">Hire Designer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
