import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurant.js";
// import Grocery from "";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext.js";


const AppLayout = () => {
 
   const [UserInfo,setUserInfo] = useState();

   useEffect(()=>{
      const data = {
        name : "Rishav Sinha",
      }
      setUserInfo(data.name);
   },[]);

    return(
      <UserContext.Provider value={{loggedInUser: UserInfo,setUserInfo}}>
        <div className="app">
          <UserContext.Provider value={{loggedInUser : "Shashi Raj"}}>
             <Header/>
          </UserContext.Provider>
           <Outlet/>
         </div>
      </UserContext.Provider>     
    )
    
  
}


const Grocery  = lazy(()=>import("./components/Grocery.js"));
// const ABout  = lazy(()=>import("./components/About.jsx"));

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children: [
      {
        path : "/",
        element :  <Body/>,
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path: "/grocery",
        element : <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  },
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);