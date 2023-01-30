import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // google login
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        console.log(data);
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };

  // github login
  const handleGithubLogIn = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        console.log(data);
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };

  // facebook login
  const handleFacebookLogIn = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        console.log(data);
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };

  // regular login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/profile");
      })
      .catch((error) => console.log(error));
    //reset login form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-gray-500 text-4xl mb-10">
        Login
      </h2>

      <div className="login-platforms flex flex-col items-center gap-5">
        <button
          onClick={handleGoogleLogIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-md hover:bg-orange-500 duration-300"
        >
          {" "}
          Login with Google
        </button>

        <button
          onClick={handleGithubLogIn}
          className="github-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-md hover:bg-orange-500 duration-300"
        >
          {" "}
          Login with Github
        </button>

        <button
          onClick={handleFacebookLogIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-md hover:bg-orange-500 duration-300"
        >
          {" "}
          Login with Facebook
        </button>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 items-start mt-5"
        >
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
            value="login"
            className="bg-sky-500 w-full py-3 text-white font-medium rounded-md hover:bg-sky-600 duration-300 cursor cursor-pointer mt-3"
          />
          <p>
            Don't have any account?{" "}
            <Link
              to="/register"
              className="text-sky-500 hover:underline duration-300"
            >
              {" "}
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
