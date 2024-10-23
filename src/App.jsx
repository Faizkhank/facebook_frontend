import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/loginpage";
import Register from "./component/register";
import Landingpage from "./component/landingpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
