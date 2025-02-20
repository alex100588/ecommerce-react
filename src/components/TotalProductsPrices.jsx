const TotalProductsPrices = ({ totalPrice }) => {
  return (
    <div className="container bg-dark price: {totalPrice} $ text-white border border-secondary rounded pt-2 d-flex justify-content-between align-items-center">
      <p>Products price: {totalPrice} $</p>
      <button className="btn btn-sm btn-success mb-2">Continue</button>
    </div>
  );
};

export default TotalProductsPrices;
