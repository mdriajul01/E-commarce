// import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </>
    
  );
}

export default App;
