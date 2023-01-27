import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase.init";

import About from "./compnents/About";
import Home from "./compnents/Home";
import Login from "./compnents/Login";
import Navbar from "./compnents/Navbar";
import NotFound from "./compnents/NotFound";
import Profile from "./compnents/Profile";
import Register from "./compnents/Register";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const App = () => {
  // states
  const [user, setUser] = useState("");

  // use effects
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      } else {
        console.log("no user found!");
      }
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
