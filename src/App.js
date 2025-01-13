import React,{lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About.jsx";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurant.js";
// import Grocery from "";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
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