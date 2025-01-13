// import {  useState,useEffect } from "react";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";


const RestaurantMenu = ()=>{


const {resId} = useParams();
const resInfo = useRestaurantsMenu(resId);
    

    if (!resInfo) return <div>Loading...</div>;

    const {name, cuisines, costForTwoMessage, avgRating,areaName } =  resInfo?.cards?.[2]?.card?.card?.info;
        

     const {itemCards} = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

//   const {itemsmenu} = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]?.card?.card?.categories?.[0];

    
      return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(",")} - {costForTwoMessage}</h4>
            <p>{avgRating} star</p>
            <p>Location- {areaName}</p>
            <h2>Menu</h2>
            <ul> 
                {itemCards.map((item)=>(
                   <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
            {/* <h3>2nd Menu</h3>
            <ul>
                <li>{menu[0].card.info.name}</li>
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;