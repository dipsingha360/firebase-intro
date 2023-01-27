import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container mx-auto flex justify-between items-center py-5 border-b ">
      <Link to="/" className="text-xl text-orange-500 font-semibold">
        Firebase Killer
      </Link>
      <ul className="links flex gap-10">
        <li>
          <Link to="/" className="hover:text-orange-500 duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-orange-500 duration-300">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-orange-500 duration-300">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
