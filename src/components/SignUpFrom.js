import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Firstimg from "../img/Firstimg.png";
import Dribble from "../img/Brown.png";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setName(storedFormData.name);
      setUsername(storedFormData.username);
      setEmail(storedFormData.email);
      setPassword(storedFormData.password);
      setIsChecked(storedFormData.isChecked);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, username, email, password, isChecked };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/profile-setup");
  };

  
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  
  const validateForm = () => {
    return (
      name.trim() !== "" &&
      /^[a-zA-Z\s]+$/.test(name) && 
      /^[a-zA-Z0-9_]+$/.test(username) && 
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && 
      password.length >= 6 && 
      isChecked 
    );
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div
        className=" p-8 md:w-6/12 md:max-w-xl flex items-center justify-center"
        style={{ backgroundColor: "rgb(242, 209, 132)" }}
      >
        <div className="max-w-md">
          <img src={Dribble} alt="Logo" className="mb-4 h-20" />
          <h1 className="text-3xl font-bold -mt-3">
            Discover the world's top Designers & Creatives.
          </h1>
          <div className="relative">
            <img src={Firstimg} alt="Illustration" className="w-full" />
          </div>
        </div>
      </div>

     
      <div
        className="bg-white p-8 md:w-1/2 flex items-center justify-center relative"
        style={{ paddingTop: "40px" }}
      >
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 mt-12">Sign up to Dribbble</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 ${
                  name.trim() !== "" && !/^[a-zA-Z\s]+$/.test(name)
                    ? "bg-red-100 text-red-500"
                    : ""
                }`}
              />
              {name.trim() !== "" && !/^[a-zA-Z\s]+$/.test(name) && (
                <p className="text-red-500">Name cannot contain numbers</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="John"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full border bg-gray-100 border-grey-300 rounded-md py-2 px-3 ${
                  username !== "" && !/^[a-zA-Z0-9_]+$/.test(username)
                    ? "bg-red-100 text-red-500"
                    : ""
                }`}
              />
              {username !== "" && !/^[a-zA-Z0-9_]+$/.test(username) && (
                <p className="text-red-500">
                  Username can only contain numbers, alphabets, and underscores
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="account@refero.design"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 ${
                  email !== "" &&
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    ? "bg-red-100 text-red-500"
                    : ""
                }`}
              />
              {email !== "" &&
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  email
                ) && <p className="text-red-500">Invalid email address</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="6+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 ${
                  password !== "" && password.length < 6
                    ? "bg-red-100 text-red-500"
                    : ""
                }`}
              />
              {password !== "" && password.length < 6 && (
                <p className="text-red-500">
                  Password must contain at least 6 characters
                </p>
              )}
            </div>
            <div className="mb-4 mt-6">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="terms" className="text-sm  text-gray-400">
                Creating an account means you're okay with our
                <span className="text-purple-500">
                  {" "}
                  Terms of Service, Privacy Policy
                </span>
                , and our default{" "}
                <span className="text-purple-500">Notification Settings</span>.
              </label>
            </div>
            <button
              type="submit"
              className={`bg-pink-500 text-white font-bold py-2 px-4 rounded-md w-full ${
                validateForm() ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!validateForm()}
            >
              Create Account
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-400">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="text-purple-500">Privacy Policy</span> and{" "}
            <span className="text-purple-500">Terms of Service</span> apply.
          </p>
          <div className="absolute top-0 right-0 mt-4">
            <p>
              Already a Member?{" "}
              <a href="#" className="underline">
                <span className="text-purple-600">Sign In</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
