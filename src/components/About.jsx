import User from "./User";
import Usercals from "./UserClass";
import React from "react";


class Aboutjs extends React.Component{

    constructor(props){
     super(props);
     console.log(props); 
     console.log("Abt Constructor");
    }

   componentDidMount(){
      console.log("called last 1");
   }


    render(){
        console.log("render2");
        return(
            <div>
                <h1>About Us</h1>
                <h2>Namste React Series</h2>
                <h3><User/></h3>          
                <h4><Usercals name = {"Shashi Raj(class)"} location = {"Gaya,Bihar"} contact = {"rishav.sinha477@gmail.com"}/></h4>
            </div>
        )
    }
}
             

export default Aboutjs;