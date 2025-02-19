import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productsToCart, setProductsToCart] = useState([]);
  const [search, setSearch] = useState('')  
  // console.log(petsToCart);            
  

  // Pentru a adauga un item in cart
  const addToCart = (item) => {
    setProductsToCart((prevCart) => [...prevCart, {...item, count:1}]);
  };

  // Am facut o flitrare pentru a elimina item din cart
  const removeFromCart = (itemId) => {
    setProductsToCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleSearch = (input)=>{
    setSearch(input)
  }

  const updateCartCounter = (id, count)=>{
    setProductsToCart((prevCart) => prevCart.map(item => item.id === id ? { ...item, count } : item));
  }
  

  return (
    <AppContext.Provider value={{ productsToCart, addToCart, removeFromCart, handleSearch, search, updateCartCounter }}>
      {children}
    </AppContext.Provider>
  );
};
