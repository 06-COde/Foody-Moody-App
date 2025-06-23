import { useContext } from "react";
import { FOOD_LOGO } from "../utils/constant.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 bg-gradient-to-tr from-orange-100 to-red-100 border border-orange-400 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex flex-col h-full p-4">
        <img
          className="h-40 w-full object-cover rounded-lg border border-orange-300 mb-3"
          src={FOOD_LOGO + cloudinaryImageId}
          alt={name}
        />

        <h3 className="text-xl font-bold text-orange-800 text-center truncate">
          {name}
        </h3>

        {aggregatedDiscountInfoV3?.header && (
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full text-center mt-2 w-fit mx-auto animate-pulse">
            {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}

        <div className="text-sm text-gray-700 mt-3 text-center space-y-1">
          <p className="line-clamp-2">{cuisines?.join(", ")}</p>
          <p className="font-semibold text-yellow-700">{avgRating} ★</p>
          <p>{sla?.slaString}</p>
          <p>{costForTwo}</p>
        </div>

        <p className="text-xs mt-auto pt-4 text-gray-600 italic text-center">
          Curated by: <span className="font-semibold">{loggedInUser}</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
