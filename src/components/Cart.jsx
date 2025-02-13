import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
    const{ petsToCart } = useContext(AppContext)
    console.log(petsToCart);
    
    return ( 
        <h1>cart</h1>
     );
}
 
export default Cart;