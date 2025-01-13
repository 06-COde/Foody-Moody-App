import {FOOD_LOGO} from "../utils/constant.js";


const ResturantCard = (props) =>{
    const {resData} = props;
    const{name, cuisines , avgRating, sla, cloudinaryImageId, costForTwo} = resData?.info;
     return(
         <div className="res-card">
             <img alt="res-logo" src={ FOOD_LOGO + cloudinaryImageId} />
            <h3>{name}</h3>
            <div className="moreinfo">
                <h4>{cuisines?.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla?.slaString} minutes</h4>
                <h4>{costForTwo}</h4>
            </div>
         </div>
     )
 }

 export default ResturantCard;  