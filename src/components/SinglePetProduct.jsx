import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const SinglePetProduct = () => {
  const params = useParams()
  console.log(params);
  
  const [pets, setPets] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/pets");
          console.log(response.data);
        setPets(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const buildPets = () => {
    console.log(pets);
    
    return (
      <Card>
        <Card.Img
          width={200}
          height={600}
          alt="400x400"
          src={`${process.env.PUBLIC_URL}${pets.petsId}`}
        />
        <Card.Title>
          {pets.title}
        </Card.Title>
        <Card.Text>
          {pets.info}
        </Card.Text>
      </Card>
    );
  };

  return (
    <Container>
      <Row>{buildPets()}</Row>
    </Container>
  );
};




export default SinglePetProduct;
