import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Accessories = () => {
    const [pets, setPets] = useState([]);
    const [hasError, setError] = useState(false)
     const{ addToCart } = useContext(AppContext)
    
    // console.log(total);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3002/accessories");
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

    const addPetsToCart = (element) =>{
      addToCart(element)
    }
    
    const buildPets = (currentElemet) => {
      const totalPrice = ()=>{
        console.log(pets.map(i => i.price))
        console.log(currentElemet);
        
        
      }
      return pets.map(({ id, title, img, price, product }) => (
        <Fragment key={id}>
          <Col xs={12} md={6} lg={3}>
            <Card className="mb-2">
              <Card.Img
               width={50}
               height={160}
                variant="top"
                className="image-style"
                src={`${process.env.PUBLIC_URL}/${img}`}
              />
              <Card.Body>
                <Card.Title className="h5">{title}</Card.Title>
                <Card.Text className="h6">Price: {price}$</Card.Text>
                <Card.Text className="h6">Product: {product}</Card.Text>
                <Button variant="primary btn-sm me-2">
                  <NavLink to={`/accessories/${id}`} className="nav-link">
                    See more
                  </NavLink>
                </Button>
                <Button onClick={()=>addPetsToCart({id, title, img, price, product})} variant="success btn-sm">
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
 
export default Accessories;