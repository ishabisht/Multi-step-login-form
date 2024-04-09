import React, { useState, useEffect, useRef } from "react";

const Card = ({ image, title, description, isSelected, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(isSelected);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsExpanded(isSelected);
  }, [isSelected]);

  useEffect(() => {
    if (isExpanded) {
      imageRef.current.style.transform = "translateY(-50%)";
    } else {
      imageRef.current.style.transform = "translateY(0)";
    }
  }, [isExpanded]);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    onSelect();
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-md p-4 ${
        isSelected ? "border-2 border-pink-500" : ""
      }`}
      onClick={handleCardClick}
      style={{ width: "250px", height: isSelected ? "auto" : "270px" }}
    >
      <div className="relative flex items-center justify-center">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className={`w-48 h-32 transition-transform duration-300 ${
            isSelected ? "transform -translate-y-1/2" : ""
          }`}
          style={{ position: "relative", zIndex: 1 }}
        />
      </div>
      <div
        className={`text-lg font-semibold mb-2 ${isSelected ? "-mt-6" : ""}`}
      >
        {title}
      </div>
      {isSelected && description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex justify-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
            isSelected ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {isSelected ? <span>&#10003;</span> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
