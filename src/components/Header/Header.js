import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
            {/* <Link to="/home">Home</Link>
            <Link to="/restaurant">Restaurant</Link> */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">FoodPanda</Navbar.Brand>
                    <Nav className="me-auto links">
                        <Link to="/home">Home</Link>
                        <Link to="/restaurant">Restaurant</Link> 
                        <Link to="/contact">Contact</Link> 
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;