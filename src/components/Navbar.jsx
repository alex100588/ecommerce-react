import { Link } from "react-router-dom";
import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const showlist = () => {
  const li = document.querySelectorAll("li");
  li.forEach((i) => i.classList.toggle("show-lists-small"));
  // console.log(li);
};

const Navbar = () => {
  const { productsToCart, search, handleSearch } = useContext(AppContext);

  const totalPrice = productsToCart?.reduce((acc, pet) => {
    acc += pet.price;
    return acc;
  }, 0);

  const setInputValue = (e)=>{
    console.log(search);
    
    handleSearch(e.target.value)
  }

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 d-flex justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <Link to="/">
          <i className="bi bi-shop text-white icon-style"></i>
        </Link>
        <div className="nav-items-style d-flex justify-content-between mt-1">
          <InputGroup  className="form-input">
            <Form.Control value={search} onChange={(e)=>{setInputValue(e)}} placeholder="Search product" aria-label="search" />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="navbar-nav align-items-center">
            <Button onClick={showlist} className="d-lg-none">
              <i className="bi bi-list ms-1"></i>
            </Button>
            <li className="nav-item ml-5 d-none d-lg-block ">
              <Link to="/" className="nav-link">
                All products
              </Link>
            </li>
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
                  Cart ({totalPrice}$)
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
