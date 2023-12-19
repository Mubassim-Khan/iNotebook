import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Signup = (props) => {
  const hostURL = "http://localhost:8000";
  // State to keep track of credentials
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" });
  // useNavigate to redirect to Home page of Notes
  let navigate = useNavigate();

  // Send the reponse to API and authenticate the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${hostURL}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success === true) {
      // Save the authtoken in local storage & redirect
      localStorage.setItem('token', json.JWT_AuthToken);
      navigate("/login");
      props.showAlertMsg("Account Created Successfully", "success")
    } else {
      props.showAlertMsg("This Email address is already registered with a user", "danger");
    }
  }
  // to display the change in every keystroke at input fields 
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={onChange} name='name' minLength={3} required />
          <div id="nameHelp" className="form-text">*Name must be atleast 3 characters long.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name='email' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange} name='password' minLength={6} required />
          <div id="passwordHelp" className="form-text">*Password must be atleast 6 characters long.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmpassword" onChange={onChange} name='confirmpassword' minLength={6} required />
        </div>
        <div className="text my-1">
          {credentials.password !== credentials.confirmpassword && "Password does not matches"}
        </div>
        <button disabled={credentials.name.length < 3 || credentials.password.length < 6 || credentials.confirmpassword.length < 6 || credentials.password !== credentials.confirmpassword} type="submit" className="btn btn-primary my-2">Sign Up</button>
        <div id="logIn" className="form-text my-2">Already have an account? <Link style={{ textDecoration: "none" }} to="/login"> Sign in </Link> </div>
      </form>
    </div>
  )
}
