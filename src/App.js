import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import Body from "./Components/Body";
import appStore from "./Utils/appStore";
import { Provider } from "react-redux";

function App() {
  return <Provider store ={appStore}><Body/></Provider> 
  
}

export default App;
