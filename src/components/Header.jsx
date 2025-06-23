import { useState, useContext } from "react";
import { Link } from "react-router"; 
import useOnlineStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const [sign, setsign] = useState("SignIn");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart?.items || []);

  return (
    <div className="h-20 bg-slate-300 flex justify-between items-center px-5">
      <div className="Logo-container">
        <img
          className="w-20 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s"
          alt="Logo"
        />
      </div>
      <div className="flex">
        <ul className="flex gap-8 items-center">
          <li className="hover:bg-white rounded-2xl hover:font-semibold">
            Online Status {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="hover:bg-white rounded-2xl hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-white rounded-2xl hover:font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-white rounded-2xl hover:font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-white rounded-2xl hover:font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:bg-white rounded-2xl hover:font-semibold font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li
            className="hover:bg-white rounded-2xl hover:font-semibold cursor-pointer"
            onClick={() => setsign(sign === "SignIn" ? "SignUp" : "SignIn")}
          >
            {sign}
          </li>
          <button
            className="h-10 w-16 text-center bg-blue-800 text-sky-100 rounded-md transition hover:bg-blue-700"
            onClick={() => setbtnNameReact(btnNameReact === "login" ? "logout" : "login")}
          >
            {btnNameReact}
          </button>
          <li className="hover:bg-white rounded-2xl hover:font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
