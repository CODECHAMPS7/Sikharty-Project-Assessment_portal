import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Image from "../Assets/image.png";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#e2e8f0] shadow-lg shadow-slate-500">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0">
        <Link to="/">
          <img src={Image} alt="Logo" className="w-36" />
        </Link>
      </div>

      {/* Nav Links Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 text-lg">
        <Link
          to="/dashboard"
          className="text-black hover:text-gray-700 transition duration-300 ease-in-out"
        >
          Dashboard
        </Link>

        {/* Login/Sign Up Button */}
        <Link
          to="/login"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>

        {/* Profile with Icon */}
        <Link
          to="/profile"
          className="flex items-center text-black hover:text-gray-700 transition duration-300 ease-in-out"
        >
          <FaUserCircle className="mr-2 text-2xl" /> Profile
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
