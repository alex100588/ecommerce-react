import { Figure } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={`${process.env.PUBLIC_URL}/img/product-1.png`}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
};

export default SingleProduct;
