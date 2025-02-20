const TotalPriceItem = ({ total, count }) => {
  
  return (
    <p className="p-style">
      Total: {total * count} $
    </p>
  );
};

export default TotalPriceItem;
