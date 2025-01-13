// import {APP_LOGO} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("login");
    
    const [sign , setsign] = useState("SignIn");
    const onlineStatus = useOnlineStatus();


    return (
        <div className="bg-slate-300 flex">
            <div className="Logo-container">
                <img  className="logo" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s" />
            </div>
            <div className="flex items-center">
                  <ul>
                    <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li><Link to="/grocery">Grocery</Link></li>
                      <li>Cart</li>
                      <li onClick={()=>{
                        sign === "SignIn" ?  setsign("SignUp") : setsign("SignIn");
                      }}>{sign}</li>
                      <button className="login" onClick={()=>{
                        btnNameReact === "login" ? setbtnNameReact("logout") : setbtnNameReact("login");
                      }}>
                        {btnNameReact}
                      </button>
                   </ul> 
            </div>
        </div>
    )
};

export default Header;