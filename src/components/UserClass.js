import React from "react";
// import Contact from "./Contact";

class Usercals extends React.Component{
    constructor(props){
        super(props)
        console.log(props);

        this.state = {
            userInfo : {
               login :"dummy",
                id : "default",
                 
            },
        };

        //console.log( this.props.name + "constructore ussr");
    }

   async componentDidMount(){
   // console.log("did mount " + this.props.name);
    const data = await fetch("https://api.github.com/users/ShashiRaj");
    const json = await data.json();
    console.log(json);

    this.setState({
     userInfo : json,
    });

   };

   componentDidUpdate(){
    console.log("comp did updated");
   }

   componentWillUnmount(){
    console.log("unmpunt happends");
   }

    render(){ 
     //   console.log("Render 1" + this.props.name);
        // const{name, location, contact} = this.props;
        const {login, id, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
            <img src= {avatar_url}/>
            <h2>Name : {login}</h2>
            <h2>Location Id: {id}</h2>
            <h3>Contact: @rishav.sinha</h3>
        </div>
        )
    }
}


export default Usercals;