import { Link } from "react-router-dom";
import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import "./Navbar.css";

const showlist = () => {
  const li = document.querySelectorAll("li");
  li.forEach((i) => i.classList.toggle("show-lists-small"));
  // console.log(li);
};

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 d-flex justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <Link to="/">
          <i className="bi bi-shop text-white icon-style"></i>
        </Link>
        <div className="nav-items-style d-flex justify-content-between mt-1">
          <InputGroup className="form-input">
            <Form.Control placeholder="Search product" aria-label="Username" />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between w-25">
          <ul className="navbar-nav align-items-center">
            <Button onClick={showlist} className="d-lg-none">
              <i class="bi bi-list ms-1"></i>
            </Button>
            <li className="nav-item ml-5 d-none d-lg-block ">
              <Link to="/pets" className="nav-link">
                Pets
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/accessories" className="nav-link">
                Accessories
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/food" className="nav-link">
                Food
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/cart" className="ml-auto">
                <Button className="button-container btn-sm ms-1">
                  Cart
                  <i className="bi bi-cart ms-1"></i>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
