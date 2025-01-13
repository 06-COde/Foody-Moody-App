import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantsMenu = (resId)=>{

    const[resInfo, setresInfo] = useState();

     useEffect(()=>{
      fetchapi();
     },[]);
     
     const fetchapi = async()=>{
        const data  = await fetch(MENU_API + resId);
        const json =  await data.json();
        console.log(json);
        setresInfo(json.data);
     } 


     return resInfo;
}

export default useRestaurantsMenu;