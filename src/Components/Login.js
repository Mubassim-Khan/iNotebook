import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Login = (props) => {
    // To update Top Loading Bar and change Title of tab 
    const updateProgress = () => {
        props.setProgress(100);
        document.title = "Login to iNotebook - iNotebook";
    }
    useEffect(() => {
        updateProgress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hostURL = "http://localhost:8000";
    // State to keep track of credentials
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    // useNavigate to redirect to Home page of Notes
    let navigate = useNavigate();
    // Send the reponse to API and authenticate the user
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`${hostURL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json)
            if (json.success === true) {
                // Save the authtoken in local storage & redirect
                localStorage.setItem('token', json.JWT_AuthToken);
                props.showAlertMsg("Logged In Successfully", "success");
                navigate("/");
            } else {
                props.showAlertMsg("Invalid Credentials", "danger");
            }
        } catch {
            props.showAlertMsg("Request Timed Out. Check your Internet Connection", "danger");
        }
    }
    // To display the change in every keystroke at input fields 
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} placeholder='example@mail.com' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={credentials.password} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email and password with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={credentials.email.length === 0 || credentials.password.length === 0}>Log In</button>
                <div id="signIn" className="form-text mt-4 redirect">New to iNotebook?
                    <Link className='redirect--link' to="/signup"> Create an account </Link>
                </div>
            </form>
        </div>
    )
}
