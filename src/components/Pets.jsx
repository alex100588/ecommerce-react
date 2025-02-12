import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [hasError, setError] = useState(false)
  const [total, setTotal] = useState(0)
  
  console.log(total);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/pets");
          // console.log(response.data);
        setPets(response.data);
      } catch (error) {
        console.log(error);
        setError(true)
      }
    };
    fetchData();
  }, []);

  if (pets === null) {
    return <Spinner animation="grow" variant="primary" />;
  }
  const totalPrice = (e)=>{
    console.log(pets.map(i => i.price))
    // console.log(e);
    
    
  }
  
  const buildPets = () => {
    return pets.map(({ id, title, img, price, family }) => (
      <Fragment key={id}>
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-2">
            <Card.Img
              variant="top"
              className="image-style"
              src={`${process.env.PUBLIC_URL}/${img}`}
            />
            <Card.Body>
              <Card.Title className="h5">{title}</Card.Title>
              <Card.Text className="h6">Price: {price}$</Card.Text>
              <Card.Text className="h6">Family: {family}</Card.Text>
              <Button variant="primary btn-sm me-2">
                <NavLink to={`/pets/${id}`} className="nav-link">
                  See more
                </NavLink>
              </Button>
              <Button onClick={e=>totalPrice(e)} variant="success btn-sm">
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
        
        <Row>
         {hasError ? <h1 className="text-center text-white">Store closed</h1> : buildPets()}
        </Row>
      </Container>
    </>
  );
};

export default Pets;
