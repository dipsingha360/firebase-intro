import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Register = ({ setUser, user }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    //signup new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user) {
          //update user
          updateUserProfile();
        }
        setUser({ ...user, displayName: name });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });

    //reset inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-3 items-start mt-5"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="fullName"> Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
            className="border py-3 rounded-md w-[20rem]"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email"> Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            placeholder="Enter your email"
            required
            className="border py-3 rounded-md w-[20rem]"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="password"> Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="border py-3 rounded-md w-[20rem]"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="bg-sky-500 w-[20rem] py-3 text-white font-medium rounded-md hover:bg-sky-600 duration-300 cursor cursor-pointer mt-3"
        />
        <p>
          Already have any account?{" "}
          <Link
            to="/login"
            className="text-sky-500 hover:underline duration-300"
          >
            {" "}
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
