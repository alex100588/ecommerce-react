import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./App.css";
import { AppProvider } from "./context/AppContext";

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
