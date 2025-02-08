import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardProps from "./CardProps";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3002/storeProducts");
      //   console.log(response.data);
      setProducts(response.data);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <CardProps id={product.id} title={product.title} test="test" />
      ))}
    </Container>
  );
};

export default Products;
