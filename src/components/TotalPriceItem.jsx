const TotalPriceItem = ({ total, count }) => {
  console.log(total);
  console.log(count);

  return (
    <p
      style={{
        color: "white",
        width: "20%",
        marginLeft: "1rem",
        marginTop: "2rem",
      }}
    >
      total: {total} $
    </p>
  );
};

export default TotalPriceItem;
