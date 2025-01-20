// import { useState } from "react";
import Itemslist from "./Itemslist";


const RestaurantCategory =({categoryName,showItems,setshowIndex})=>{

// const [showItems,setshowItems] = useState(false);


const handleClick = ()=>{
    setshowIndex();
    // setshowItems(!showItems);
}


    return(
        <div className=" items-start mx-auto my-8 bg-slate-200 shadow-xl w-6/12">
           <div className="flex justify-between cursor-pointer"onClick={handleClick}  >
             <span className="font-bold">{categoryName.title}({categoryName.itemCards.length})</span>
             <span>⬇️</span>
           </div>
             <div className="flex items-start py-4">
               {showItems && <Itemslist item={categoryName.itemCards}/>}
             </div> 
      </div>
    );
};

export default RestaurantCategory;