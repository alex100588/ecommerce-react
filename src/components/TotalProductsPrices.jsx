const TotalProductsPrices = ({totalPrice}) => {
    return ( 
        <p
        style={{
          color: "white",
          width: "20%",
          marginLeft: "1rem",
          marginTop: "2rem",
        }}
      >
        total: {totalPrice} $
      </p>
     );
}
 
export default TotalProductsPrices;