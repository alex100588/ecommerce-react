import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [petsToCart, setPetsToCart] = useState([]);
  const [search, setSearch] = useState('')  
  // console.log(petsToCart);            
  

  // Pentru a adauga un item in cart
  const addToCart = (item) => {
    setPetsToCart((prevCart) => [...prevCart, item]);
  };

  // Am facut o flitrare pentru a elimina item din cart
  const removeFromCart = (itemId) => {
    setPetsToCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleSearch = (input)=>{
    setSearch(input)
  }
  

  return (
    <AppContext.Provider value={{ petsToCart, addToCart, removeFromCart, handleSearch, search }}>
      {children}
    </AppContext.Provider>
  );
};
