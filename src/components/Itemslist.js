import { FOOD_LOGO } from "../utils/constant";

const Itemslist = ({item})=>{
    console.log(item);
    return(
        <div>
            {item.map((kards)=>(
                  <div key = {kards.card.info.id} className="py-4 m-2 border-gray-300 border-b-2 text-left flex justify-around" >
                        <div className="w-9/12">
                           <div className="py-3">
                              <span className="font-bold">{kards.card.info.name}</span>
                              <span className="font-bold"> - ₹{kards.card.info.price ? kards.card.info.price/100 : kards.card.info.defaultPrice/100}</span>
                           </div>
                              <p>{kards.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                          <div className="absolute">
                            <button className=" bg-white shadow-2xl text-yellow-300 rounded-lg  p-1 ">Add+</button>
                          </div>
                          <img src={FOOD_LOGO + kards.card.info.imageId} className="w-28"/>
                        </div>   
                  </div>
                ))}
        </div>
    )
}

export default Itemslist;