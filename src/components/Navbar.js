import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";


function Navbar() {
    let navigate = useNavigate();
    

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">INOTEBOOK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form> : <>  
                        <div
                            className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-4"
                            style={{ width: '40px', height: '40px', fontWeight: 'bold' }}>
                            
                        </div>
                        <button onClick={handleLogout} className='btn btn-primary'>Logout</button> </>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
