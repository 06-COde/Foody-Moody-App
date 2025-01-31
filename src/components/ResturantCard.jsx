import { useContext } from "react";
import {FOOD_LOGO} from "../utils/constant.js";
import UserContext from "../utils/UserContext.js";


const ResturantCard = (props) =>{

const {loggedInUser} = useContext(UserContext);
console.log(loggedInUser);


    const {resData} = props;
    // console.log(resData);
    const{name, cuisines , avgRating, sla, cloudinaryImageId, costForTwo, aggregatedDiscountInfoV3} = resData?.info;
     return(
         <div className="m-4 p-4 w-[220px] border border-orange-600 rounded-xl bg-red-100 hover:bg-red-200 ">
             <div className="flex items-center justify-center flex-wrap overflow-hidden ">
             <img  className="h-30 w-40 rounded-lg bg-center " alt="res-logo" src={ FOOD_LOGO + cloudinaryImageId} />
            <h3  className="font-bold  py-3">{name}</h3>
            <h4 className="bg-transparent text-black font-bold p-2 m-2">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h4>
            <div className="text-center items-center overflow-auto scrollbar-hide ">
                <h4>{cuisines?.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla?.slaString}</h4>
                <h4>{costForTwo}</h4>
                <h4>{loggedInUser}</h4>
            </div>
             </div>
         </div>
     )
 }

//  export const withOfferLabel = (ResturantCard)=>{
//     return(props)=>{
//         const offerLabel = props?.info?.aggregatedDiscountInfoV3?.header;
//         console.log(offerLabel);
//           return(
//             <div>
//                 <label>{offerLabel} </label>
//                 <ResturantCard {...props}/>
//             </div>
//           )
//     }
//  }

 export default ResturantCard;  