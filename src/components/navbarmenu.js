import React from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';

export const NavbarMenu = () => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
            <img className="logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/dcxe28l-8348b34c-05da-43d5-875d-e83737b33589.png/v1/fit/w_150,h_150,strp/mortal_kombat_11_dragon_logo_png_by_cporsdesigns_dcxe28l-150.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU5OSIsInBhdGgiOiJcL2ZcL2YwNWE5YjViLWVhZDUtNDYwZS04NTczLTczYmEyZmZmOWNkZVwvZGN4ZTI4bC04MzQ4YjM0Yy0wNWRhLTQzZDUtODc1ZC1lODM3MzdiMzM1ODkucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3BKLNgZKbsZCfzc-AByIWvfEnoVBV6ONLaZ33eHjbdk" alt="image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>             
            </Nav>
            <Form inline>
                <Button className="buttonLogin" variant="outline-warning">Login</Button>
                <Button variant="outline-success">Register</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);



