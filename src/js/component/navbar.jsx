import React from "react";

export default function Navbar() {
    return <div className="container-fluid bg-dark">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex">
            <a className="navbar-brand me-auto" href="#">Navbar</a>
            <div className="d-flex">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </nav>
    </div>
}