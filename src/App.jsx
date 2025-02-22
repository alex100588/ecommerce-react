import { Outlet } from "react-router-dom";
import Title from "./components/Title";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <AppProvider>
        <div className="bg">
          <Navbar />
          <Title />
          <Outlet />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
