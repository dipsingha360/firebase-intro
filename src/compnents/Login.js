import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const Login = () => {
  const navigate = useNavigate();

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
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-md hover:bg-orange-500 duration-300"
        >
          {" "}
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
