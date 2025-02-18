import axios from "axios";
import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false)
  const { addToCart, search } = useContext(AppContext);

  const filterPetsBySearch = useMemo(() => {
    return data.filter((pet) => pet.title.toLowerCase().includes(search));
  }, [data, search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/pets");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        // setError(true);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://localhost:3002/accessories");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };

    if (filterPetsBySearch === null) {
      return <Spinner animation="grow" variant="primary" />;
    }

    const fetchData3 = async () => {
      try {
        const response = await axios.get("http://localhost:3002/food");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };

    if (filterPetsBySearch === null) {
      return <Spinner animation="grow" variant="primary" />;
    }

    const getAllProducts = async () => {
      await Promise.all([fetchData(), fetchData2(), fetchData3()]).then(([pets, accessories, food]) =>
        setData([...pets, ...accessories, ...food])
      );
    };
    getAllProducts();
  }, []);

  console.log(data);

  const addPetsToCart = (element) => {
    addToCart(element);
  };
  const buildAllProducts = () => {
    return filterPetsBySearch.map(({ id, title, img, price, family }) => (
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
              <Button
                onClick={() => addPetsToCart({ id, title, img, price, family })}
                variant="success btn-sm"
              >
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

  return <>
  <Container>
    
    <Row>
     {hasError ? <h1 className="text-center text-white">Store closed</h1> : buildAllProducts()}
    </Row>
  </Container>
</>
};

export default AllProducts;
