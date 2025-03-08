import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const showlist = () => {
 

  const li = document.querySelectorAll("li");
  li.forEach((i) => i.classList.toggle("show-lists-small"));
  // console.log(li);
};

const Navbar = () => {
  const navigate = useNavigate();
  const { handleSetUsername, productsToCart, search, handleSearch } = useContext(AppContext);
  const userName = JSON.parse(localStorage.getItem("user"));
  console.log(userName);
  

  const totalPrice = productsToCart?.reduce((acc, pet) => {
    // console.log(pet);
    acc += pet.price * pet.count;
    return acc;
  }, 0);

  const setInputValue = (e) => {
    // console.log(search);
    handleSearch(e.target.value);
  };

  const logOut = ()=>{
    navigate('/')
     localStorage.clear(userName)
     handleSetUsername('')
  }


  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 d-flex justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <Link to="/">
          <i className="bi bi-shop text-white icon-style"></i>
        </Link>
        <div className="nav-items-style d-flex justify-content-between mt-1">
          <InputGroup className="form-input">
            <Form.Control
              value={search}
              onChange={(e) => {
                setInputValue(e);
              }}
              placeholder="Search product"
              aria-label="search"
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="navbar-nav align-items-center text-center">
            <Button onClick={showlist} className="d-lg-none mt-1">
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
            <li className='nav-item ml-5 d-none d-lg-block' >
              <Link to="/login" className={`nav-link ${userName?.name  &&  'display-after-login' }`} >
                Login
              </Link>
            </li>
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/register" className={`nav-link ${userName?.name  &&  'display-after-login' }`} >
                Register
              </Link>
            </li>
            {/* {showRegister()} */}
            <li className="nav-item ml-5 d-none d-lg-block">
              <Link to="/cart" className="ml-auto">
                <Button className="button-container btn-sm ms-1">
                  Cart ({totalPrice}$)
                  <i className="bi bi-cart ms-1"></i>
                </Button>
              </Link>
              <Link className="ml-auto">
                <Button onClick={()=>logOut()} className={` ${userName?.name ? ' button-container btn-sm btn-danger ms-1 ' : 'd-none'}  `}>
                  Logout
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
