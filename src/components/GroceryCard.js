 import { GROCERY_IMG } from "../utils/constant";

const GroceryCards = (props) => {
    const { resGrocery } = props;
    const { displayName,imageId} = resGrocery || {}; // Handle undefined props
  
    return (
      <div className="h-auto w-50 bg-slate-600 text-black flex flex-wrap  ">
        <div className="m-4 p-4 w-[220px] border border-orange-600 rounded-xl bg-red-100 hover:bg-red-200">
           <img alt="res-logo" src={ GROCERY_IMG + imageId} />
          <h1>{displayName || "No Name Available"}</h1>
        </div>
      </div>
    );
  };
  
  export default GroceryCards;
  