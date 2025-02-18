import { Button, Image } from "react-bootstrap";

const CartProps = ({id, title, img, price, removeFromCart, counter, setCounter}) => {
    return ( 
        <>
            <Image
              className="me-lg-2 border rounded cart-image"
              width={180}
              height={160}
              src={`${process.env.PUBLIC_URL}/${img}`}
            ></Image>
            <div className="w-100">
              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-primary">
                  Your product: {title}
                </li>
                <li className="list-group-item">Price: {price}$</li>
              </ul>
              <div className="d-flex justify-content-between">
                
                {/* Counter */}
                <i
                  onClick={() => setCounter((counter + 1)) }
                  className="bi bi-plus-circle text-white"
                ></i> 

                <h5 className="text-white ">{counter}</h5>
                <i onClick={() => setCounter((counter - 1))} className="bi bi-dash-lg text-white"></i>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => removeFromCart(id)}
                >
                  Delete
                </Button>
                <p className="text-white"></p>
              </div>
            </div>
            </>
     );
}
 
export default CartProps;