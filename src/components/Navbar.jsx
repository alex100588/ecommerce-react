import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5 nav-style d-flex justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <div className="nav-items-style d-flex justify-content-between">
          <InputGroup className="input-style">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between w-25">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <Button className="button-container">
              <span className="mr-2">
                <i className="fas fa-cart-plus " />
              </span>
              cart
            </Button>
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
