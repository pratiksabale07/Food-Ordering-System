import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-div">
            <div class="container">
                <div class="collapse navbar-collapse navbar-elements" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link class="navbar-brand navbar-element" to="/ ">Zwigato</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </ul>
                    <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-1">
                                <Link class="nav-link active navbar-element" aria-current="page" to='/login'>Login</Link>
                            </li>
                            <li class="nav-item px-1">
                                <a class="nav-link navbar-element" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
