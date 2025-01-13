import { useEffect, useState } from "react";

const User = (props)=>{

const [count] = useState(0);
const [count2] = useState(1);

// useEffect(()=>{
//  setInterval(()=>{
//     console.log("Render happens");
//   },1000)
  
// },[])
 

    return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <h1>count2 = {count2}</h1>
            <h2>Name : {props.name}</h2>
            <h2>Locations : {props.location}</h2>
            <h3>Contact: rishav.sinha477@gmail.com</h3>
        </div>
    )
}


export default User;


