import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function Nav1() {

    const [isLogged, setIsLogged] = useState(false);

    const token = localStorage.getItem('token')

    useEffect(() => {
        !!token ? setIsLogged(true) : setIsLogged(false);

    }, []);
    


    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    
    return (

        <Navbar expand="lg" className="bg-body-tertiary"
            style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                cursor: "pointer",
                pointerEvents: "all",
            }}  >

            <Container>
                <Navbar.Brand href="/">Esp-8266-IoT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isLogged ? <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="Devices">Devices</Nav.Link>

                        
                      
                        <NavDropdown title="Code" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">FrontEnd</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                BackEnd
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Arduino</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                GitHub
                            </NavDropdown.Item>                   
                            </NavDropdown>
                            <Nav.Link href="Login">Logout</Nav.Link>
                        </> : <>
                            <Nav.Link href="Login">Login</Nav.Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

    )
}

export default Nav1
