import { Button, Card, Col, NavLink, Row } from "react-bootstrap";

const CardProps = ({ id, title,company }) => {
    return <Row key={id}>
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "15rem" }} className="mb-2">
        <Card.Img
          variant="top"
          className="imageStyle"
          src="img/product-1.png"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{company}</Card.Text>
          <Button variant="primary">
            <NavLink to={`product/1`} className="nav-link">
              See more
            </NavLink>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>;
};

export default CardProps;
