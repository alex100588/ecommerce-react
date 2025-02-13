import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container } from "react-bootstrap";

const Cart = () => {
    const{ petsToCart } = useContext(AppContext)

    const petsObj = ()=>{
        if(petsToCart.length === 0){
            return <div className="text-white">
                <p>no items added</p>
            </div>
            
        }else{
            // console.log(petsToCart);
           return petsToCart.map(pet =>{
                console.log(pet.title);
                <div key={pet.id} className="text-white">
                        {pet.title}
                    </div>
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