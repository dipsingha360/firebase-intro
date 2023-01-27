import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const handleGoogleLogIn = () => {
    // google login
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
      </div>
    </div>
  );
};

export default Login;
