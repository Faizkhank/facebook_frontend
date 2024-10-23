import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Landingpage = () => {
  const [User, Setuser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user", {
          withCredentials: true,
        });
        console.log("Response data:", response.data);
        Setuser(response.data);
      } catch (err) {
        navigate("/login");
        console.error("Error fetching users:", err);
      }
    };

    fetchData();
  }, []);
  const HandleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`duration-500 ease-linear ${
          User ? "translate-y-0" : "translate-y-48"
        }`}
      >
        <p className=" text-center text-3xl font-bold">
          Welcome {`${User.First_name} ${User.Surname}`}
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={HandleLogout}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;
