import React from "react";
import DribbleLogo from "../img/Dribble.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-80 text-black py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* Column 1 */}
        <div
          className="col-span-1 flex flex-col justify-start items-start"
          style={{ marginTop: "-30px" }}
        >
          <img src={DribbleLogo} alt="Dribble Logo" className="h-20" />
          <p className="text-sm text-black-100 -mt-3">
            Dribble is the world's leading community for creatives to share, grow, and get hired.
          </p>
          <div className=" space-x-4">
            <FontAwesomeIcon icon={faTwitter} className="text-gray-800" />
            <FontAwesomeIcon icon={faFacebook} className="text-gray-800" />
            <FontAwesomeIcon icon={faInstagram} className="text-gray-800" />
            <FontAwesomeIcon icon={faPinterest} className="text-gray-800" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          <h3 className="text-sm font-bold text-black-100">For Designers</h3>
          <ul className="text-sm text-black-100">
            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Weekly Warm-Up</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
          <h3 className="text-sm font-bold text-black-100">Hire Designers</h3>
          <ul className="text-sm text-black-100">
            <li>Post a job openings</li>
            <li>Post a freelance project</li>
            <li>Search of Designers</li>
            </ul>
            <h3 className="text-sm font-bold text-black-100 mt-4">
            Brands
          </h3>
          <ul className="text-sm text-black-100">
            <li>Advertise with us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-1">
          <h3 className="text-sm font-bold text-black-100">Company</h3>
          <ul className="text-sm text-black-100">
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Media Kit</li>
            <li>Testimonials</li>
            <li>API</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="col-span-1">
          <h3 className="text-sm font-bold text-black-100">Directories</h3>
          <ul className="text-sm text-black-100">
            <li>Design jobs</li>
            <li>Designers for hire</li>
            <li>Freelance designers for hire</li>
            <li>Tags</li>
            <li>Places</li>
          </ul>
          <h3 className="text-sm font-bold text-black-100 mt-4">
            Design Assets
          </h3>
          <ul className="text-sm text-black-100">
            <li>Dribble Marketplace</li>
            <li>Creative Market</li>
            <li>Fontspring</li>
            <li>Font Squirrel</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div className="col-span-1">
          <h3 className="text-sm font-bold text-black-100">Design Resources</h3>
          <ul className="text-sm text-black-100">
            <li>Freelancing</li>
            <li>Design Hiring</li>
            <li>Design Portfolio</li>
            <li>Design Education</li>
            <li>Creative Process</li>
            <li>Design Industry Trends</li>
          </ul>
        </div>
      </div>
      <hr className="mt-8 border-gray-400" />
      <p className="mt-4 text-sm text-gray-500">
        2023 Dribble.All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
