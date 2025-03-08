import axios from "axios";
import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Food = () => {
    const [pets, setPets] = useState([]);
    const [hasError, setError] = useState(false)
    const{ addToCart, search } = useContext(AppContext)
    
    // console.log(total);
    const filterBySearch = useMemo(()=>{
     return pets.filter(pet => pet.title.toLowerCase().includes(search))
    }, [pets, search])
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://server-json-vert.vercel.app/food");
            // console.log(response.data);
          setPets(response.data);
        } catch (error) {
          console.log(error);
          setError(true)
        }
      };
      fetchData();
    }, []);
  
    if (filterBySearch === null) {
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
      return filterBySearch.map(({ id, title, img, price, product }) => (
        <Fragment key={id}>
          <Col xs={12} md={6} lg={3}>
            <Card className="mb-3">
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
                  <NavLink to={`/food/${id}`} className="nav-link">
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
 
export default Food;