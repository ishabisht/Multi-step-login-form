import React, { useRef, useState, useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Dribble from "../img/Dribble.png";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [imageSizeError, setImageSizeError] = useState("");
  const handleBeforeUnload = () => {
    localStorage.removeItem("avatarImage");
    localStorage.removeItem("location");
  };

  const checkAllFieldsFilled = useCallback(
    (storedImageData, storedLocationData) => {
      const storedLocation =
        storedLocationData || localStorage.getItem("location");
      const avatarImageData = storedImageData || avatarImage;
      if ((location.trim() || storedLocation) && avatarImageData) {
        setAllFieldsFilled(true);
      } else {
        setAllFieldsFilled(false);
      }
    },
    [avatarImage, location]
  );

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    const storedLocation = localStorage.getItem("location");

    if (storedImage) {
      setAvatarImage(storedImage);
    }

    if (storedLocation) {
      setLocation(storedLocation);
    }

    checkAllFieldsFilled(storedImage, storedLocation);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [checkAllFieldsFilled]);

  const handleChooseImage = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 3 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setAvatarImage(event.target.result);
          localStorage.setItem("avatarImage", event.target.result); 
        };
        reader.readAsDataURL(file);
        setImageSizeError(""); 
      } else {
        setImageSizeError("Image size should be 3 MB or less");
      }
    }
  };

  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setLocation(locationValue);
    localStorage.setItem("location", locationValue);
    setLocationError("");
    checkAllFieldsFilled(); 
  };

  

  const handleNext = () => {
    const storedLocation = localStorage.getItem("location");
    if (!storedLocation && !location.trim()) {
      setLocationError("Location cannot be empty");
    } else {
      navigate("/third"); 
    }
  };

  const handleBack = () => {
    navigate("/signup"); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 p-4">
        <img src={Dribble} alt="Dribble" className="h-24" />
      </div>
      <div className="w-full max-w-screen-md p-4 lg:p-8">
        <div className="bg-white rounded-lg mt-8 p-8">
          <h1 className="text-2xl font-bold mb-4 md:text-4xl">
            Welcome! Let's create your profile
          </h1>
          <p className="text-sm text-gray-400 mb-8">Let others get to know you better! You can do these later</p>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-2">Add an avatar</h2>
            <div className="relative">
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                className="w-32 h-32 rounded-full bg-white-300 flex items-center justify-center border-dashed border-4 border-gray-350"
                style={{
                  backgroundImage: `url(${avatarImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {avatarImage ? null : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="2x"
                    className="text-gray-500"
                  />
                )}
              </div>
              <button
                className="absolute top-12 right-0 bg-gray-300 text-black px-3 py-2 rounded-full hover:bg-pink-600 hover:text-white focus:outline-none"
                onClick={handleChooseImage}
              >
                Choose image
              </button>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">&gt;</span>
              <p className="text-sm text-gray-500 ml-2">
                Or choose one of our defaults
              </p>
            </div>
            {imageSizeError && (
              <p className="text-red-500 text-sm mt-1">{imageSizeError}</p>
            )}{" "}
          </div>
          <div className="mb-12 border-b-2 border-gray-300 pb-2">
            <h2 className="text-lg font-semibold mb-2">Add your location</h2>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Enter a location"
                value={location}
                onChange={handleLocationChange}
                className="w-full border-none bg-transparent focus:outline-none"
              />
            </div>
            {locationError && (
              <p className="text-red-500 text-sm mt-1">{locationError}</p>
            )}
          </div>
          <button
            className="w-48 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none"
            onClick={handleNext}
            disabled={!allFieldsFilled}
          >
            Next
          </button>
          {localStorage.getItem("location") &&
            localStorage.getItem("avatarImage") && (
              <p
                className="mt-4 text-sm text-gray-500 cursor-pointer"
                onClick={handleBack}
              >
                or press RETURN
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
