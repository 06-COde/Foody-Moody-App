import React from "react";
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className="Header">
            <div className="Logo-container">
                <img  className="logo" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s" />
            </div>
            <div className="Nav-items">
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Contact Us</li>
                      <li>Cart</li>
                   </ul> 
            </div>
        </div>
    )
}

const ResturantCard = () =>{
    return(
        <div className="res-card">
            <img className="resimg" src="https://b.zmtcdn.com/data/pictures/chains/5/312995/c07c891fa38cfb434c587f8a790fbf01.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt=""/>
           <h3>Lala Hotel</h3>
        </div>
    )
}



const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-Container">
                <ResturantCard/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);