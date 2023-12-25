import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Browse from "./Components/Browse";
import Login from "./Components/Login";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
