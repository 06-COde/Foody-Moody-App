import ResturantCard from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router"; // ✅ Correct Import
import useOnlineStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofResturant, setlistofResturant] = useState([]);
  const [filterDetails, setfilterDetails] = useState([]);
  const [searchBar, setsearchBar] = useState("");

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setlistofResturant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setfilterDetails(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline, check your internet connection!</h1>;
  }

  return (
    <div className="body">
      {/* Filter Button */}
      <div className="filter-btn bg-pink-800 flex justify-between items-center">
        <div className="search m-2 p-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border-2 border-rose-500 rounded-md text-center text-zinc-950"
            value={searchBar}
            onChange={(e) => setsearchBar(e.target.value)}
          />

          <button
            className="p-1 m-1 bg-blue-700 rounded-md text-sky-100"
            onClick={() => {
              const filtered = listofResturant.filter((food) =>
                food.info.name?.toLowerCase().includes(searchBar.toLowerCase())
              );
              setfilterDetails(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="p-1 m-1 bg-blue-700 rounded-md text-sky-100"
          onClick={() => {
            const filteredlist = listofResturant.filter((res) => res.info.avgRating > 4.5);
            setfilterDetails(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>

        <div>
          <label className="p-1 m-1 bg-blue-700 rounded-md text-sky-100">UserName</label>
          <input
            className="border border-black"
            value={loggedInUser || ""} // ✅ Fixed uncontrolled component warning
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="res-Container flex flex-wrap items-center justify-around">
        {filterDetails.map((Details) => (
          <Link key={Details.info.id} to={"/restaurants/" + Details.info.id}>
            <ResturantCard resData={Details} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;



