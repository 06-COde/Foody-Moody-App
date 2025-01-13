import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus";



const Body = () => {

  const [listofResturant, setlistofResturant] = useState([]);
  const [ filterDetails, setfilterDetails] = useState([]);

 const [searchBar, setsearchBar ] = useState("");


  
   useEffect(()=>{
    fetchapi();
   },[]);

const fetchapi = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();
console.log(json);


console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

setlistofResturant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 setfilterDetails(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// if(listofResturant === 0){
//   return <Shimmer/>;
// }  ;

 const onlineStatus = useOnlineStatus();
 if (onlineStatus === false)
  return ( <h1>Looks like you are offline ,check your internet connection!</h1>
);


    return (
      <div className="body">
        {/* Filter Button */}
        <div  className="filter-btn">
            <div className="search">
                <input
                 type="text"
                  className="search-box" 
                  value= {searchBar} onChange={(e)=>{setsearchBar(e.target.value)}}/> 

                <button onClick={()=>{
                 const filterDetails = listofResturant.filter((food)=>{
                   return food.info.name?.toLowerCase().includes(searchBar.toLowerCase())
                 })
                 setfilterDetails(filterDetails);
                }}>Search</button>
            </div>

             <button className="BtnO" onClick={() => {
                 const filteredlist = listofResturant.filter((res) => res.info.avgRating > 4 );
                 setfilterDetails(filteredlist);
                 console.log(listofResturant);
                }} 
             >   Top Rated Resturant
             </button>
        </div>
    
    
        <div className="res-Container">
          {filterDetails.map((Details) => (
            <Link
            key = { Details.info.id}
             to = {"/restaurants/" + Details.info.id }
            >
              <ResturantCard resData={Details} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default Body;