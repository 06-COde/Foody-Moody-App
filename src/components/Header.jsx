// import {APP_LOGO} from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("login");
    
    const [sign , setsign] = useState("SignIn");
    const onlineStatus = useOnlineStatus();
  
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items || []);
    console.log(cartItems); 



    return (
        <div className="h-20 bg-slate-300 flex place-content-between items-center px-5">
            <div className="Logo-container">
                <img  className="w-20 rounded-lg" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s" />
            </div>
            <div className="flex">
                  <ul className="flex flex-wrap gap-8 items-center ">
                    <li className="hover:bg-white rounded-2xl hover:font-semibold">Online Status {onlineStatus ? "online✅" : "offline🔴"}</li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold"><Link to="/">Home</Link></li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold"><Link to="/about">About Us</Link></li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold"><Link to="/contact">Contact Us</Link></li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold"><Link to="/grocery">Grocery</Link></li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold " onClick={()=>{
                        sign === "SignIn" ?  setsign("SignUp") : setsign("SignIn");
                      }}>{sign}</li>
                      <button className="h-10 w-16 text-center bg-blue-800 text-sky-100 rounded-md" onClick={()=>{
                        btnNameReact === "login" ? setbtnNameReact("logout") : setbtnNameReact("login");
                      }}>
                        {btnNameReact}
                      </button>
                      <li className="hover:bg-white rounded-2xl hover:font-semibold">{loggedInUser}</li>
                   </ul> 
            </div>
        </div>
    )
};

export default Header;