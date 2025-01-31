import { useEffect, useState } from "react";
import GroceryCards from "./GroceryCard";

const Grocery = ()=>{

 const[groceryItem, setgroceryItem] = useState([]);
 const[itemGrocery, setitemGrocery] = useState([]);

 const [barSearch, setbarSearch] = useState("");


 useEffect(()=>{
  fetchapi();
 },[]);

 const fetchapi = async()=>{
  const data = await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
  const json = await data.json(); 

   console.log(json?.data?.widgets?.[1]?.data);
   setgroceryItem(json?.data?.widgets?.[1]?.data);
   setitemGrocery(json?.data?.widgets?.[1]?.data);
};


    return(
        <div className="mx-auto my-8 bg-slate-200 shadow-xl w-auto  ">
            <div className="flex items-center justify-evenly py-10">
               <h1 className="font-extrabold text-xl">Grocery Items</h1>
               <div>
                <input className="border border-black cursor-pointer rounded-md
                "type="text" 
                placeholder="Search Grocery"
                value={barSearch}
                onChange={(e) => setbarSearch(e.target.value)}
                  />
                  <button
                          className="p-1 m-1 bg-blue-700 rounded-md text-sky-100"
                           onClick={() => {
                           const searchfilter = groceryItem.filter((Groceries) =>
                         Groceries?.displayName?.toLowerCase().includes(barSearch.toLowerCase()));
                         setitemGrocery(searchfilter);
                          }}
                          >Click!
                  </button>
               </div>  
            </div>
            <div>
                <div className="res-Container flex flex-wrap items-center justify-around">
                   {itemGrocery?.length > 0 ? (
                    itemGrocery.map((details) => <GroceryCards key={details.nodeId} resGrocery={details} />)
                        ) : (
                            <div className="text-center">
                            <img
                                src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
                                alt="Nothing to order!"
                                className="mx-auto h-40 w-35  rounded-2xl"
                            />
                            <p className="text-xl font-extrabold mt-4 ">Grocery Loading...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Grocery; 