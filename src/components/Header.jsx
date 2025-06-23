import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const [sign, setsign] = useState("SignIn");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart?.items || []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-slate-300 px-5 py-3 md:py-0 flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          className="w-16 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s"
          alt="Logo"
        />
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menu Items */}
      <div
        className={`w-full md:w-auto mt-4 md:mt-0 ${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-8`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm md:text-base items-start md:items-center">
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            Online Status {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li
            className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold cursor-pointer"
            onClick={() => setsign(sign === "SignIn" ? "SignUp" : "SignIn")}
          >
            {sign}
          </li>
          <li>
            <button
              className="h-10 px-4 bg-blue-800 text-sky-100 rounded-md transition hover:bg-blue-700 text-sm md:text-base"
              onClick={() => setbtnNameReact(btnNameReact === "login" ? "logout" : "login")}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="hover:bg-white px-2 py-1 rounded-2xl hover:font-semibold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
