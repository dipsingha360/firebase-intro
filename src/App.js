import { Route, Routes } from "react-router-dom";
import About from "./compnents/About";
import Home from "./compnents/Home";
import Login from "./compnents/Login";
import Navbar from "./compnents/Navbar";
import NotFound from "./compnents/NotFound";
import Profile from "./compnents/Profile";
import Register from "./compnents/Register";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
