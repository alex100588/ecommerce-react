import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Title />
        <Outlet />
      </div>
    </>
  );
}

export default App;
