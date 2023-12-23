import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        props.showAlertMsg("Logged Out Successfully", "success");
        navigate("/login");
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-md gx-0">
                        <Link to="/">
                            <img src="" alt='logo' style={{ height: "40px", width: "110px", borderRadius: "5px" }} />
                        </Link>
                        <Link className="navbar-brand mx-3" to="/">iNotebook</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-1">
                                    <Link className={`nav-link ${location.pathname} === "/" ? "active" : ""`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className={`nav-link ${location.pathname} === "/about" ? "active" : ""`} to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className={`nav-link ${location.pathname} === "/contact" ? "active" : ""`} to="/contact">Contact</Link>
                                </li>
                            </ul>
                            {!localStorage.getItem("token") ?
                                <form className="d-flex">
                                    <Link className="btn btn-outline-primary mx-2" to="/login" role="button">Log In</Link>
                                    <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>
                                </form> :
                                <button onClick={handleLogout} className="btn btn-primary mx-2">Log Out</button>
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
