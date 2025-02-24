import { Outlet } from "react-router-dom";
import Title from "./components/Title";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <AppProvider>
        <div className="bg">
          <Navbar />
          <p className="text-white text-end me-5 h4">{userName?.name && `Welcome ${userName?.name}`}</p>
          <Title />
          <Outlet />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
