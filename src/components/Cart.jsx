import { Fragment, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Container } from "react-bootstrap";
import CartProps from "./CartProps";
import TotalPriceItem from "./TotalPriceItem";

const Cart = () => {
  const { productsToCart, removeFromCart } = useContext(AppContext);
  let [counter, setCounter] = useState(1);

  // let total = 0
  // productsToCart.map(item=> {
  //   const prices = item.price
  //   total+=prices
  //   console.log(total);
  //   return total
  // })
  // setTotalPrice(total)

  const petsObj = () => {
    if (productsToCart.length === 0) {
      return (
        <div className="text-white">
          <h1 className="text-center">Your cart is empty</h1>
        </div>
      );
    } else {
      // console.log(productsToCart);
      return productsToCart.map((pet) => {
        return (
          <Fragment key={pet.id}>
            <div className="mb-2 d-flex border bg-secondary rounded p-2 ">
              <CartProps
                title={pet.title}
                img={pet.img}
                price={pet.price}
                id={pet.id}
                removeFromCart={removeFromCart}
                counter={counter}
                setCounter={setCounter}
              />
              <TotalPriceItem total={pet.price} count={pet.total} />
            </div>
            <div style={{ color: "white" }}>Total: 0</div>
          </Fragment>
        );
      });
    }
  };

  return <Container className="cart-width">{petsObj()}</Container>;
};

export default Cart;
