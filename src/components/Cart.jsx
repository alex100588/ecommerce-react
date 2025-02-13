import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container } from "react-bootstrap";

const Cart = () => {
    const{ petsToCart } = useContext(AppContext)

    const petsObj = ()=>{
        if(petsToCart.length === 0){
            console.log("empty");
            
        }else{
            // console.log(petsToCart);
            petsToCart.map(pet =>{
                console.log(pet.title);
                <h1>{pet.title}</h1>
            } )
        }
    }
    
    return ( 
        <Container>
            {petsObj()}
        </Container>
    )
}
 
export default Cart;