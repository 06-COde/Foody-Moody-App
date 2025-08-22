import ResturantCard from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofResturant, setlistofResturant] = useState([]);
  const [filterDetails, setfilterDetails] = useState([]);
  const [searchBar, setsearchBar] = useState("");
  const [loading, setLoading] = useState(true);

  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setlistofResturant(restaurants);
      setfilterDetails(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!onlineStatus) {
    return <h1 className="text-center p-10 text-red-600">⚠️ You are offline!</h1>;
  }

  return (
    <div className="px-4 py-6">
      {/* Filter & Search */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-6">
        {/* Search Section */}
        <div className="flex gap-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-rose-500 rounded-md px-2 py-1 text-black"
            value={searchBar}
            onChange={(e) => setsearchBar(e.target.value)}
            placeholder="Search restaurants"
          />
          <button
            className="bg-blue-700 text-white px-3 py-1 rounded-md"
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

        {/* Top Rated Filter */}
        <button
          className="bg-blue-700 text-white px-4 py-1 rounded-md"
          onClick={() => {
            const filtered = listofResturant.filter((res) => res.info.avgRating > 4.5);
            setfilterDetails(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Username Input */}
        <div className="flex items-center gap-2">
          <label className="text-blue-900 font-semibold">User:</label>
          <input
            className="border border-black rounded px-2 py-1"
            value={loggedInUser || ""}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards / Shimmer */}
      <div className="flex flex-wrap gap-6 justify-center">
        {loading ? (
          <Shimmer />
        ) : filterDetails.length === 0 ? (
          <p className="text-center text-red-500 text-lg font-medium">
            No restaurants found!
          </p>
        ) : (
          filterDetails.map((Details) => (
            <Link key={Details.info.id} to={"/restaurants/" + Details.info.id}>
              <ResturantCard resData={Details} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
