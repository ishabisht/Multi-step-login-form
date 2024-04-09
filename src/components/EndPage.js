import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";

const EndPage = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  const userEmail = formData ? formData.email : "";

  const handleResendConfirmation = () => {};

  const handleChangeEmail = () => {};

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Please Verify Your Email...
        </h1>
        <div className="relative mb-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 text-7xl"
          />
          <div className="absolute top-4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 h-5 w-5 flex items-center justify-center rounded-full">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-white text-sm"
            />
          </div>
        </div>
        <p className="text-sm mb-4 text-center">
          Please verify your email address. We've sent a confirmation email to
        </p>
        <p className="text-sm mb-4 text-center font-bold">{userEmail}</p>
        <p className="text-sm mb-4 text-center">
          Click the confirmation link in the email to begin using Dribbble.
        </p>
        <p className="text-sm  text-center">
          Didn't receive the email? Check your Spam folder, it may have been{" "}
        </p>
        <p className="text-sm  text-center">
          {" "}
          caught by a filter. If you still don't see it, you can
        </p>
        <p
          className="text-sm mb-4 text-pink-600 text-center cursor-pointer"
          onClick={handleResendConfirmation}
        >
          resend the confirmation email
        </p>
        <p className="text-sm text-center mb-14">
          Wrong email address?{" "}
          <span className="text-pink-600 text-center cursor-pointer" onClick={handleChangeEmail}>
            Change it
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EndPage;
