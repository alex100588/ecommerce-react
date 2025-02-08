import { Card } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <Card>
      <Card.Img
        width={200}
        height={600}
        alt="400x400"
        src={`${process.env.PUBLIC_URL}/img/product-1.png`}
      />
      <Card.Text>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Card.Text>
    </Card>
  );
};

export default SingleProduct;
