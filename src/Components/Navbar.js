import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/">NewsMonkey</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/About">About</a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-light mx-3">Info</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
