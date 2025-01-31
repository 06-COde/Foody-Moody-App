import { useDispatch, useSelector } from "react-redux";
import Itemslist from "./Itemslist";
import {clearCart} from "../utils/cartSlice.js";



const Cart  = ()=>{

   const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleclearCart = ()=>{
  dispatch(clearCart());
 }


    return(
         <div className=" text-center ">
            <h1  className="text-2xl">Cart Items</h1>
            <div  className="w-6/12 m-auto">
            <Itemslist item={cartItems} />
            </div>  
            <button className="p-1 m-1 bg-blue-700 rounded-md text-sky-100" onClick={handleclearCart}>Clear Cart</button>
         </div>
    )
};

export default Cart;