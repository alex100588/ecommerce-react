import { Fragment, useContext} from "react";
import { AppContext } from "../context/AppContext";
import { Container } from "react-bootstrap";
import CartProps from "./CartProps";
import TotalProductsPrices from "./TotalProductsPrices";
import './Cart.css';

const Cart = () => {
  const { productsToCart, removeFromCart, updateCartCounter } =
    useContext(AppContext);

  const totalPrice = productsToCart?.reduce((acc, pet) => {
    console.log(pet);

    acc += pet.price * pet.count;
    return acc;
  }, 0);

  const petsObj = () => {
    if (productsToCart.length === 0) {
      return (
        <div className="text-white">
          <h1 className="text-center">Your cart is empty</h1>
        </div>
      );
    } else {
      console.log(productsToCart);
      return productsToCart.map((pet) => {
        return (
          <Fragment key={pet.id}>
            <div className="mb-2 d-flex border bg-secondary rounded p-2 font-design">
              <CartProps
                updateCartCounter={updateCartCounter}
                count={pet.count}
                title={pet.title}
                img={pet.img}
                price={pet.price}
                id={pet.id}
                removeFromCart={removeFromCart}
              />
            </div>
            
          </Fragment>
        );
      });
    }
  };

  return (
    <Container className="cart-width pb-5">
      {petsObj()}
      <TotalProductsPrices totalPrice={totalPrice} />
    </Container>
  );
};

export default Cart;
