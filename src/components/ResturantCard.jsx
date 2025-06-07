import { useContext } from "react";
import { FOOD_LOGO } from "../utils/constant.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;

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
    <div
      className="m-4 p-4 w-60 border border-orange-500 rounded-xl bg-gradient-to-tr from-orange-100 to-red-200 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 animate-fadeIn"
    >
      <div className="flex flex-col items-center">
        <img
          className="h-32 w-full rounded-lg object-cover mb-3 border border-orange-300"
          alt="res-logo"
          src={FOOD_LOGO + cloudinaryImageId}
        />

        <h3 className="font-bold text-lg text-orange-800 text-center">{name}</h3>

        {aggregatedDiscountInfoV3?.header && (
          <h4 className="text-xs bg-red-500 text-white rounded-full px-2 py-1 mt-1 animate-pulse">
            {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
          </h4>
        )}

        <div className="text-sm text-slate-700 text-center mt-2 space-y-1">
          <p>{cuisines?.join(", ")}</p>
          <p className="font-semibold text-yellow-700">{avgRating} ★</p>
          <p>{sla?.slaString}</p>
          <p>{costForTwo}</p>
          <p className="text-slate-800 font-semibold italic">By: {loggedInUser}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
