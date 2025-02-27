import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productsToCart, setProductsToCart] = useState([]);
  const [search, setSearch] = useState('')  
  const [userName, setUsername] = useState('')
  // console.log(petsToCart);            
  
  const handleSetUsername = (name)=>{
    setUsername(name)
  }

  // Pentru a adauga un item in cart
  const addToCart = (item) => {
    // console.log(item.id ? [...prevCart, {...item, count:0}] : [...prevCart, {...item, count:1}]);
     const foudedProduct = productsToCart.find((product)=> product.id === item.id)
    
    setProductsToCart((prevCart) => {
      return foudedProduct ? prevCart.map((prevItem)=> prevItem.id === foudedProduct.id ? {...prevItem, count: prevItem.count+1} : prevItem) : [...prevCart, {...item, count:1}]
    });
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
    <AppContext.Provider value={{ productsToCart, addToCart, removeFromCart, handleSearch, search, updateCartCounter, handleSetUsername, userName }}>
      {children}
    </AppContext.Provider>
  );
};
