import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  NavLink,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router";

const SingleAccessoriesProduct = () => {
    const params = useParams();

    const [pets, setPets] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3002/accessories/${params.accessoriesId}`
          );
          // console.log(response.data);
          setPets(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [params.accessoriesId]);
  
    const buildPets = () => {
      if (pets === null) {
        return <Spinner animation="grow" variant="primary" />;
      }
      // console.log(pets.title);
  
      return (
        <Row className="align-images">
          <Card className="col-12 col-md-7  ">
            <Card.Img
              width={50}
              height={300}
              src={`${process.env.PUBLIC_URL}/${pets.img}`}
              className="pt-3 rounded-top"
            />
            <div className=" mt-2 mb-2 d-flex">
              <Button variant="success btn-sm ">
                <NavLink to="">
                  Add to cart
                  <i className=" bi bi-cart ms-1"></i>
                </NavLink>
              </Button>
              <Link to="/cart" className="ml-auto">
                <Button className="button-container btn-sm ms-2">
                  Go to Cart
                  <i className="bi bi-cart ms-1"></i>
                </Button>
              </Link>
              <Link to="/" className="ml-auto">
                <Button className="button-container btn-sm ms-2 bg-danger">
                  Continue shopping
                  <i className="bi bi-arrow-right-circle ms-1"></i>
                </Button>
              </Link>
            </div>
            <Card.Title>{pets.title}</Card.Title>
            <Card.Text>Price: {pets.price}$</Card.Text>
            <Card.Text>{pets.info}</Card.Text>
          </Card>
          {/* Second card */}
          <Card className="col-12 col-md-5 ">
            <Card.Img
              width={50}
              height={300}
              src={`${process.env.PUBLIC_URL}/${pets.img}`}
              className="pt-3 rounded-top"
            />
            <Card.Img
              width={50}
              height={300}
              src={`${process.env.PUBLIC_URL}/${pets.img}`}
              className="pt-3 rounded-top"
            />
          </Card>
        </Row>
      );
    };
  
    return (
      <Container>
        <Row>{buildPets()}</Row>
      </Container>
    );
  };
  
 
export default SingleAccessoriesProduct;