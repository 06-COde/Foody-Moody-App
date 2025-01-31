import { useDispatch } from "react-redux";
import { FOOD_LOGO } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const Itemslist = ({item})=>{
 if (!item || item.length === 0) {
        return (
            <div className="text-center">
                <img
                    src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
                    alt="Nothing to order!"
                    className="mx-auto w-1/2"
                />
                <p className="text-xl font-semibold mt-4">Oops! Order some food please!</p>
            </div>
        );
    }
    // console.log(item);

    const dispatch = useDispatch();

    const handleAddItem = (kards) => {
        dispatch(addItems(kards)); 
    };

    return(
        <div>
            {item.map((kards)=>(
                  <div data-testid="foodItems" key = {kards.card.info.id} className="py-4 m-2 border-gray-300 border-b-2 text-left flex justify-around" >
                        <div className="w-9/12">
                           <div className="py-3">
                              <span className="font-bold">{kards.card.info.name}</span>
                              <span className="font-bold"> - ₹{kards.card.info.price ? kards.card.info.price/100 : kards.card.info.defaultPrice/100}</span>
                           </div>
                              <p>{kards.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                          <div className="absolute">
                            <button className=" bg-white shadow-2xl text-yellow-300 rounded-lg  p-1" 
                             onClick={()=>handleAddItem(kards)}>Add+</button>
                          </div>
                          <img src={FOOD_LOGO + kards.card.info.imageId} className="w-28"/>
                        </div>   
                  </div>
                ))}
        </div>
    )
}

export default Itemslist;