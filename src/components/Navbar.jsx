import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import "./Navbar.css";

const showlist = ()=>{
  const li = document.querySelectorAll('li')
  li.forEach(i => i.classList.toggle('show-lists-small'))
  // console.log(li);
}

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 px-sm-5 d-flex justify-content-between">
      
      <div className="d-flex justify-content-between w-100">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <div className="nav-items-style d-flex justify-content-between">
          <InputGroup className="form-input">
            <Form.Control
              placeholder="Search product"
              aria-label="Username"
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between w-25">
          <ul className="navbar-nav align-items-center">
        <Button onClick={showlist} className="d-lg-none">toggle</Button>
            <li className="nav-item ml-5 d-none d-lg-block ">
              <Link to="/" className="nav-link">
                Phones
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/" className="nav-link">
                Pets
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/" className="nav-link">
                Games
              </Link>
            </li>
            <li>
              <Link to="/cart" className="ml-auto">
                <Button className="button-container">cart</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
