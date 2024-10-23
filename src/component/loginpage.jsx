import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [Number_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          Number_email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data.user === true) {
        navigate("/user");
      }
    } catch (err) {
      // Handle error
      console.error(err);
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="px-4 sm:px-10 lg:px-44 mx-auto my-28 flex flex-col lg:flex-row justify-center">
      <div className="w-full lg:w-[600px] mt-20 mr-16">
        <img
          width="350px"
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        />
        <h2 className="font-sans text-3xl pl-9">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="w-full lg:w-auto lg:ml-26">
        <div className="shadow-xl rounded-lg w-full lg:w-[440px] mx-auto border p-4 mt-5 bg-white h-[400px]">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full h-14 rounded-lg text-lg outline-0 focus:outline-0 border p-4"
              placeholder="Email address or Phone number"
              value={Number_email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full my-4 h-14 rounded-lg text-lg outline-0 focus:outline-0 border p-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full h-14 my-2 bg-blue-600 rounded-md font-sans text-2xl font-bold text-white"
            >
              Log in
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="text-center text-blue-500 text-lg mt-2">
              <p>Forget password?</p>
            </div>
            <hr className="mt-5 border-1 border-slate-300"></hr>
          </form>
          <div className="text-center mt-5">
            <Link to="/register">
              <button className="bg-green-500 w-1/2 rounded-lg px-2 py-3 text-white font-bold text-lg">
                Create new account
              </button>
            </Link>
          </div>
        </div>
        <p className="text-center mt-6">
          <span className="font-bold">Create a Page</span> for a celebrity,
          brand or business.
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
