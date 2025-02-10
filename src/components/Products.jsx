import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/phones");
        //   console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const buildPhones = () => {
    return products.map(({ id, title, img, price, company }) => (
      <Fragment key={id}>
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-2">
            <Card.Img
              variant="top"
              className="imageStyle"
              src={`${process.env.PUBLIC_URL}/${img}`}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>Price: {price} $</Card.Text>
              <Card.Text>Company: {company}</Card.Text>
              <Button variant="primary btn-sm me-2">
                <NavLink to={`/phones/${id}`} className="nav-link">
                  See more
                </NavLink>
              </Button>
              <Button variant="primary btn-sm">
                <NavLink to="" className="nav-link ">
                  Add to cart
                  <i className=" bi bi-cart ms-1"></i>
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <br />
      </Fragment>
    ));
  };

  return (
    <>
      <Container>
        <Row>{buildPhones()}</Row>
      </Container>
    </>
  );
};

export default Products;
