import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Button, Container, Image } from "react-bootstrap";

const Cart = () => {
  const { petsToCart, removeFromCart } = useContext(AppContext);
  let [counter, setCounter] = useState(1);
  let [totalPrice, setTotalPrice] = useState(0)

  const petsObj = () => {
    if (petsToCart.length === 0) {
      return (
        <div className="text-white">
          <h1 className="text-center">Your cart is empty</h1>
        </div>
      );
    } else {
      // console.log(petsToCart);
      return petsToCart.map((pet) => {
        return (
          <div
            key={pet.id}
            className="mb-2 d-flex border bg-secondary rounded p-2 "
          >
            <Image
              className="me-lg-2 border rounded cart-image"
              width={180}
              height={160}
              src={`${process.env.PUBLIC_URL}/${pet.img}`}
            ></Image>
            <div className="w-100">
              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-primary">
                  Your product: {pet.title}
                </li>
                <li className="list-group-item">Price: {pet.price}$</li>
              </ul>
              <div className="d-flex justify-content-between">
                
                {/* Counter */}
                <i
                  onClick={() => setCounter((counter + 1)) }
                  className="bi bi-plus-circle text-white"
                ></i>

                <h5 className="text-white ">{counter}</h5>
                <i onClick={() => setCounter((counter - 1))} className="bi bi-dash-lg text-white"></i>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => removeFromCart(pet.id)}
                >
                  Delete
                </Button>
                <p className="text-white">{totalPrice ? pet.price : setTotalPrice(totalPrice + pet.price)}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return <Container className="cart-width">{petsObj()}</Container>;
};

export default Cart;
