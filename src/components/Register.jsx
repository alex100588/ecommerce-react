import { useState } from "react";
import { useNavigate } from "react-router";
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  };

  return (
    <>
      <div className="login-text">Register</div>
      <form className="form-design" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
            className="form-control"
            id="1"
            aria-describedby="emailHelp"
            placeholder="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="2">Email address</label>
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            className="form-control"
            id="3"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="4">Password</label>
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            className="form-control"
            id="5"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary" onSubmit={()=>navigate('/')}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
