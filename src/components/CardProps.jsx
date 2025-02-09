
import { Button, Card, Col, NavLink, Row } from "react-bootstrap";

const CardProps = ({ title, company,img }) => {
  return (
    
      <Card className="mb-3">
        <Card.Img
          variant="top"
          className="imageStyle"
          src={`${process.env.PUBLIC_URL}/${img}`}
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
  );
};

export default CardProps;
