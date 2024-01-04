import React, { useRef, useState } from "react";
import Header from "./Header";
import {validateFormData} from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage ,setErrorMessage] = useState(null);
    const dispatch = useDispatch()
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const handleLoginForm =()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleClick =()=>{
      const message =  validateFormData(email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return;
        if(!isSignInForm){
            //signup
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid, email, displayName} = auth.currentUser;

      dispatch(addUser({uid : uid, email : email, displayName: displayName}))

      navigate("/browse")

    }).catch((error) => {
      setErrorMessage(error.message)
    });
    console.log(user);
    console.log("navigated to browser")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage )

    // ..
  });

        }
        else{
            //sign in logic

signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

   
    console.log(user,'rzdg');
    navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage )

  });

        }
    }
  return(
    <div>
    <Header />
    <div className="absolute">
       <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <form onSubmit ={(e)=>e.preventDefault()}className ="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-transparent-70 text-white bg-opacity-80">
        <h1 className ="font-bold text-2xl py-2">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {  !isSignInForm &&     ( <input type ="text" placeholder ="Full Name" ref ={name} className ="p-2 my-4 w-full bg-gray-800" />)}

        <input type ="text" placeholder ="email address" ref={email} className ="p-2 my-4 w-full bg-gray-800" />
        <input type ="text" placeholder ="password" ref ={password} className ="p-2 my-4 w-full  bg-gray-800"/>
        <p className ="p-1 text-red-600">{errorMessage}</p>
        <button className="p-4 my-4 w-full bg-red-600" onClick ={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={handleLoginForm}>{isSignInForm ? "New to Netflix? Sign In" : "Already Registered ? Sign Up"}</p>

    </form>
    </div>
  );
};

export default Login;
