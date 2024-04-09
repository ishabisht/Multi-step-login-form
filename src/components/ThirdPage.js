import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import First from "../img/Img1.png";
import Second from "../img/Img2.png";
import Last from "../img/Img3.png";
import Dribble from "../img/Dribble.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (optionId) => {
    setSelectedOptions(optionId);
  };

  const handleNext = () => {
    navigate("/fourth");
  };
  const handleBack = () => {
    navigate("/profile-setup");
  };
  const options = [
    {
      id: 1,
      image: First,
      title: "I'm a designer looking to share my work",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 2,
      image: Second,
      title: "I'm looking to hire a designer",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 3,
      image: Last,
      title: "I'm looking for design inspiration",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="px-8 py-4">
        <img src={Dribble} alt="Dribble" className="h-24" />
        <button
          onClick={handleBack}
          className="bg-gray-300 text-gray-600 hover:text-gray-900 absolute left-36 top-10 px-4 py-2 rounded-md text-M"
        >
          <FontAwesomeIcon icon={faAngleLeft} size="sm" />
        </button>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">What brings you to Dribbble?</h1>
        <p className="text-gray-600 mb-20">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {options.map((option) => (
            <Card
              key={option.id}
              image={option.image}
              title={option.title}
              description={option.description}
              isSelected={selectedOptions === option.id}
              onSelect={() => handleOptionSelect(option.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md"
          onClick={handleNext}
          disabled={selectedOptions.length === 0}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
