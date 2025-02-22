import { Link } from "react-router";
import "./TotalProductsPrices.css";

const TotalProductsPrices = ({ totalPrice }) => {
  return (
    <div className="container bg-dark price: {totalPrice} $ text-white border border-secondary rounded pt-2 d-flex justify-content-between align-items-center">
      <p>Products price: {totalPrice} $</p>
      <div>
        <Link to="/">
          <button className="btn btn-sm btn-primary mb-2 remove-margin-left">
            Continue shopping
          </button>
        </Link>
        <Link>
          <button className="btn btn-sm btn-success mb-2 ms-3 remove-margin-left">
            Continue to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TotalProductsPrices;
