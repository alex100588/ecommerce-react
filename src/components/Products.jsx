import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";

const Products = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: "15rem" }} className="mb-2">
            <Card.Img
              variant="top"
              className="imageStyle"
              src="img/product-1.png"
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>{}</Card.Text>
              <Button variant="primary">
                <NavLink to={`product/1`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: "15rem" }} className="mb-2">
            <Card.Img
              variant="top"
              className="imageStyle"
              src="img/product-1.png"
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>{}</Card.Text>
              <Button variant="primary">
                <NavLink to={`product/1`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: "15rem" }} className="mb-2">
            <Card.Img
              variant="top"
              className="imageStyle"
              src="img/product-1.png"
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>{}</Card.Text>
              <Button variant="primary">
                <NavLink to={`product/1`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      
    </Container>
  );
};

export default Products;
