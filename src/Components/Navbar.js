import React from 'react'
import './css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './FirebaseConfig'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-div">
            <div className="container">
                <div className="collapse navbar-collapse navbar-elements" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="navbar-brand navbar-element" to="/ ">Zwigato</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <Link className="nav-link active navbar-element" aria-current="page" to='/login'>Login</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className="nav-link navbar-element" onClick={() => { signOut(auth).then(() => { navigate('/') }) }}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
