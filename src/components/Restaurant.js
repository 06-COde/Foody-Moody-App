// import {  useState,useEffect } from "react";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";


const RestaurantMenu = ()=>{

    const [showIndex, setshowIndex] = useState(0);

const {resId} = useParams();
const resInfo = useRestaurantsMenu(resId);
    

    if (!resInfo) return <div>Loading...</div>;

    const {name, cuisines, costForTwoMessage} =  resInfo?.cards?.[2]?.card?.card?.info;
        

    //  const {itemCards} = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
     console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);



     const categoriesCard =
     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
         (catego) =>
             catego?.card?.card?.["@type"] ===
             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     ) || [];
      console.log(categoriesCard);
   

      return (
        <div className="menu text-center">
            <h1 className="font-bold text-4xl py-6">{name}</h1>
            <h4 className="font-semibold">{cuisines.join(",")} - {costForTwoMessage}</h4>
           <div className="Categories">
                {categoriesCard.map((categ, index) => (
                    <RestaurantCategory key={categ?.card?.card.title} categoryName={categ?.card?.card} 
                    showItems = {index === showIndex ? true : false} 
                    setshowIndex={()=>setshowIndex(index)} 
                    />
                ))}
           </div>
        </div>
    )
}

export default RestaurantMenu;