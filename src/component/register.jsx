import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [First_name, SetFirst_name] = useState("");
  const [Surname, Setsurname] = useState("");
  const [gender, setGender] = useState("");
  const [password, Setnew_password] = useState("");
  const [Number_email, SetNumber_email] = useState("");
  const [errors, setErrors] = useState({
    day: false,
    month: false,
    year: false,
    gender: false,
    First_name: false,
    Surname: false,
    password: false,
    Number_email: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign up for facebook";
  }, []);
  const handleSubmit = async () => {
    const newErrors = {
      day: !day,
      month: !month,
      year: !year,
      gender: !gender,
      First_name: !First_name,
      Surname: !Surname,
      password: !password,
      Number_email: !Number_email,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
    const Dateofbirth = day + "/" + month + "/" + year;
    const formData = {
      Dateofbirth,
      First_name,
      Surname,
      gender,
      password,
      Number_email,
    };

    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <img
          className="w-[350px] object-contain"
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="Logo"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[500px] bg-white shadow-lg rounded-lg border text-center">
          <div className="p-4">
            <h5 className="text-3xl font-semibold">Create a new account</h5>
            <p className="text-slate-500">it`s quick and easy</p>
          </div>
          <hr></hr>
          <div className="px-4 pb-4">
            <div>
              <div className="flex justify-center p-3">
                <input
                  className={`px-4 py-2 border rounded-lg mr-4 focus:outline-0 ${
                    errors.First_name ? "border-red-500" : "border-slate-400"
                  }`}
                  placeholder="First name"
                  value={First_name}
                  onChange={(e) => SetFirst_name(e.target.value)}
                />
                <input
                  className={`px-4 py-2 border rounded-lg focus:outline-0 ${
                    errors.Surname ? "border-red-500" : "border-slate-400"
                  }`}
                  placeholder="Surname"
                  value={Surname}
                  onChange={(e) => Setsurname(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <p className="text-slate-500 pl-3 text-sm mt-2 float-start">
                  Date of birth
                </p>
                <div className="flex items-center w-full">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className={`border rounded w-full h-10 py-2 px-2.5 ${
                      errors.day ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Day</option>
                    {[...Array(31).keys()].map((d) => (
                      <option key={d + 1} value={d + 1}>
                        {d + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className={`border rounded w-full h-10 py-2 px-2.5 ${
                      errors.month ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((m, index) => (
                      <option key={index} value={index + 1}>
                        {m}
                      </option>
                    ))}
                  </select>

                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={`border rounded w-full h-10 py-2 px-2.5 ${
                      errors.year ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => 2023 - i).map(
                      (y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="flex col-span-3 space-x-12 ml-10">
                  <div className="row">
                    <p
                      className={`text-xs float-left ${
                        errors.day ? "text-red-500" : "invisible"
                      }`}
                    >
                      Day is required.
                    </p>
                  </div>
                  <div className="row">
                    <p
                      className={`text-xs text-center ${
                        errors.month ? "text-red-500" : "invisible"
                      }`}
                    >
                      Month is required.
                    </p>
                  </div>
                  <div className="row">
                    <p
                      className={`text-xs float-right ${
                        errors.year ? "text-red-500" : "invisible"
                      }`}
                    >
                      Year is required.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-slate-500 pl-3 text-sm float-left mt-2">
                    Gender
                  </label>
                  <div className="flex justify-center space-x-2 w-full">
                    <label
                      className={`flex items-center border rounded-lg px-10 py-2 ${
                        errors.gender ? "border-red-500" : ""
                      }`}
                    >
                      Male
                      <input
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="ml-1"
                      />
                    </label>
                    <label
                      className={`flex items-center border rounded-lg px-10 py-2 ${
                        errors.gender ? "border-red-500" : ""
                      }`}
                    >
                      Female
                      <input
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="ml-2"
                      />
                    </label>
                    <label
                      className={`flex items-center border rounded-lg px-10 py-2 ${
                        errors.gender ? "border-red-500" : ""
                      }`}
                    >
                      Custom
                      <input
                        type="radio"
                        value="custom"
                        checked={gender === "custom"}
                        onChange={(e) => setGender(e.target.value)}
                        className="ml-2"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    onChange={(e) => SetNumber_email(e.target.value)}
                    value={Number_email}
                    className={`px-2 py-2 border rounded-lg mr-4 focus:outline-0 w-full mt-3 ${
                      errors.Number_email
                        ? "border-red-500"
                        : "border-slate-400"
                    }`}
                    placeholder="Mobile number or email address"
                  />
                  <input
                    onChange={(e) => Setnew_password(e.target.value)}
                    value={password}
                    className={`px-2 py-2 border mr-4 rounded-lg focus:outline-0 w-full mt-3 ${
                      errors.password ? "border-red-500" : "border-slate-400"
                    }`}
                    placeholder="New password"
                  />
                </div>
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 mb-5 mt-4">
                People who use our service may have uploaded your contact
                information to Facebook.
                <span>
                  <a
                    className="text-blue-500 hover:text-blue-700 focus:text-blue-700" // Updated classes for blue color
                    href="https://www.facebook.com/help/637205020878504"
                    target="_blank" // Optional: opens link in a new tab
                    rel="noopener noreferrer" // Optional: security improvement
                  >
                    Learn more.
                  </a>
                </span>
              </p>
              <p className="text-xs text-slate-500 mb-5">
                By clicking Sign Up, you agree to our Terms,
                <span>
                  <a
                    className="text-blue-500 hover:text-blue-700 focus:text-blue-700" // Updated classes for blue color
                    href="https://www.facebook.com/help/637205020878504"
                    target="_blank" // Optional: opens link in a new tab
                    rel="noopener noreferrer" // Optional: security improvement
                  >
                    Privacy Policy and Cookies Policy.
                  </a>
                </span>
                You may receive SMS notifications from us and can opt out at any
                time.
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-green-600 px-20 py-1.5 text-white text-xl font-semibold rounded-lg"
            >
              Sign up
            </button>
            <Link to="/login">
              <p className="text-lg mt-4 text-blue-600">
                Already have a account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
