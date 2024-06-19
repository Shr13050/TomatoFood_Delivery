import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios'

const LoginPopup = ({ setshowlogin }) => {
  //login dikhau ya signin

  const {url,settoken}=useContext(StoreContext)

  const [currstate, setcurrstate] = useState("Sign Up");

  //save karo data ko
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };




  //   useEffect(()=>{
  // console.log(data)
  //   },[data])


  const onLogin = async(event)=>{
 event.preventDefault();
 let newURL = url;
 if(currstate==='Login'){
  newURL +='/api/user/login'


 }else{
  newURL+= "/api/user/register"
 }
 
 const response = await axios.post(newURL,data)

 if(response.data.success){
  settoken(response.data.token);
  localStorage.setItem("token",response.data.token)
  setshowlogin(false)
 }else{
  alert(response.data.message)
 }

  }

  const handleToggle = () => {
    setcurrstate(currstate === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className="login-popup">
      <form  onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account? <span onClick={handleToggle}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={handleToggle}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
