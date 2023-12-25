import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const handleLoginForm =()=>{
        setIsSignInForm(!isSignInForm)
    }
  return(
    <div>
    <Header />
    <div className="absolute">
       <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <form className ="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-transparent-70 text-white bg-opacity-80">
        <h1 className ="font-bold text-2xl py-2">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {  !isSignInForm &&     ( <input type ="text" placeholder ="email address" className ="p-2 my-4 w-full bg-gray-800" />)}

        <input type ="text" placeholder ="email address" className ="p-2 my-4 w-full bg-gray-800" />
        <input type ="text" placeholder ="password"className ="p-2 my-4 w-full  bg-gray-800"/>
        <button className="p-4 my-4 w-full bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={handleLoginForm}>New to Netflix? signup here</p>

    </form>
    </div>
  );
};

export default Login;
