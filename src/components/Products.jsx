import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProps from "./CardProps";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get("http://localhost:3002/storeProducts");
      //   console.log(response.data);
      setProducts(response.data);
      
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3}>
            <CardProps
              title={product.title}
              img={product.img}
              price={product.price}
              company={product.company}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
