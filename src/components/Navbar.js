import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">
                                    <i style={{color: "white"}} class="fa-solid fa-house-chimney"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:3000/guitars">
                                    GUITARS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:3000/pedals">
                                    PEDALS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/amps">
                                    AMPS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/your-listings">
                                    YOUR LISTINGS
                                </a>
                            </li>
                        </ul>
                        <ul id="cartLink" class="navbar-nav">
                            <a class="nav-link" href="cart">
                                <li class="nav-item">CART</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
