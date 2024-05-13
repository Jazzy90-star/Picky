import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <Container>
            <Navbar bg="light" data-bs-theme="light">
                <Navbar.Brand href="home">The Picky Eater</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/preferences">
                        Preferences
                    </Nav.Link>
                    <Nav.Link as={Link} to="/createMeals">
                        Create Meals
                    </Nav.Link>
                    <Nav.Link as={Link} to="/foodLookup">
                        Food Lookup
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default NavBar;
