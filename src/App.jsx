import { Outlet } from "react-router-dom";
import Title from "./components/Title";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar/Navbar";
import CheckoutForm from "./components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import WelcomeUser from "./components/WelcomeUser";
const stripePromise = loadStripe(
  "pk_test_51NhuUkDgyDvcJYDc19okgF0IwCVx0hrUrwDGoF0OccqbgKBJLGCRDwzLF4EqeqfMlm8VD6DFxS7RYPTD6dTeAIzq00o499liZg"
);

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "pk_test_51NhuUkDgyDvcJYDc19okgF0IwCVx0hrUrwDGoF0OccqbgKBJLGCRDwzLF4EqeqfMlm8VD6DFxS7RYPTD6dTeAIzq00o499liZg",
  };

  return (
    <>
      <AppProvider>
        <div className="bg">
          <Navbar />
         <WelcomeUser  />
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
          <Title />
          <Outlet />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
