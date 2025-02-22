import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import TotalPriceItem from "./TotalPriceItem";
import "./CartProps.css";

const CartProps = ({
  id,
  title,
  img,
  price,
  removeFromCart,
  count,
  updateCartCounter,
}) => {
  const [counter, setCounter] = useState(count);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    updateCartCounter(id, count + 1);
  };
  const handleDecrement = () => {
    if (count < 1) return 0;
    setCounter((prev) => prev - 1);
    updateCartCounter(id, count - 1);
  };

  return (
    <>
      <Image
        className="me-lg-2 border rounded cart-image"
        width={180}
        height={160}
        src={`${process.env.PUBLIC_URL}/${img}`}
      ></Image>
      <div className="w-100">
        <ul className="list-group mb-3">
          <li className="list-group-item list-group-item-primary">
            Your product: {title}
          </li>
          <li className="list-group-item">Price: {price}$</li>
        </ul>

        <div className="d-flex justify-content-between">
          {/* Counter */}
          <i
            onClick={() => handleIncrement()}
            className="bi bi-plus-circle text-white ms-1"
          ></i>

          <h5 className="text-white ">{counter}</h5>
          <i
            onClick={() => handleDecrement()}
            className="bi bi-dash-lg text-white"
          ></i>

          <Button
            variant="danger"
            className="btn btn-sm delete-design"
            onClick={() => removeFromCart(id)}
          >
            Delete
          </Button>
          <div className="text-white">
            <TotalPriceItem total={price} count={count} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProps;
