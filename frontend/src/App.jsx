import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
const App = () => {
  const[showlogin,setshowlogin]= useState(false);
  return(
    <>
   
    {showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>}
    <div className="app">
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
