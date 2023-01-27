import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase.init";

import { useEffect, useState } from "react";
import About from "./compnents/About";
import Home from "./compnents/Home";
import RequireAuth from "./compnents/RequireAuth";
import Login from "./compnents/Login";
import Navbar from "./compnents/Navbar";
import NotFound from "./compnents/NotFound";
import Profile from "./compnents/Profile";
import Register from "./compnents/Register";
import RequireAuth2 from "./compnents/RequireAuth2";

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
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <RequireAuth user={user}>
              <Profile user={user} setUser={setUser} />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireAuth2 user={user}>
              <Login />
            </RequireAuth2>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAuth2 user={user}>
              <Register />
            </RequireAuth2>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
