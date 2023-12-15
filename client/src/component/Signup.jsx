import React, { useState } from "react";
import "./Singup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Singup = () => {
  // State variables for form fields
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [agreeTerms, setAgreeTerms] = useState(true);
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can perform additional validation or submit the form data here
    console.log("Form submitted:", {
      username,
      email,
      password,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        { email, username, password },
        navigate("/login")
      );

      // If registration is successful, you can handle the response accordingly
      console.log("Registration successful:", response.data);

      // For example, you might want to redirect the user to the login page
      // history.push('/login');
    } catch (error) {}
  };

  return (
    <div>
      <div className="wrapper">
        <div className="form-left">
          <h2 className="text-uppercase">information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p className="text">
            <span>Sub Head:</span>
            Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo
            viverra. Praesent elementum facilisis leo vel.
          </p>

          <div className="form-field">
            <Link className="btn btn-outline-danger" to="/login">
              Singin
            </Link>
          </div>
        </div>
        <form className="form-right " onSubmit={handleSubmit}>
          <h2 className="text-uppercase">Registration form</h2>
          <div className="row">
            <div className="col-sm-12 mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input-field"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Your Email</label>
            <input
              type="email"
              className="input-field"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <div className="col-sm-12 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="pwd"
                id="pwd"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <input
              type="submit"
              defaultValue="Register"
              className="register"
              name="register"
              onSubmit={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
