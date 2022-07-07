import React from "react";
import {
    Navbar,
    Container,
    Button,
    Nav,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";

const Navbar2 = () => {
    return (
        <Navbar variant="dark " expand="sm">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/">
                            <i
                                style={{color: "white"}}
                                class="fa-solid fa-house-chimney"
                            ></i>
                        </Nav.Link>
                        <NavDropdown
                            title="Categories"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="/guitars">
                                Guitars
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/amps">
                                Amps
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/pedals">
                                Pedals
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="your-listings">Your Listings</Nav.Link>

                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbar2;
