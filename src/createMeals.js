import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import LoginPopup from "./LogInModal";

function GridComplexExample() {
    return (
        <>
            <div id="img" style={{height: "300px", overflow: "hidden"}}>
                <img
                    src="https://blog.myheritage.com/wp-content/uploads/Heritage-cooking-blog-post-feature-image.png"
                    alt="Placeholder"
                    style={{width: "80%", height: "100%", objectFit: "cover"}}
                />
            </div>
            <h2> Create Your Recipe Here</h2>
            {/* <LoginPopup /> */}
            <Container id="intro">
                <p>
                    Welcome to our recipe community! We're excited to have you share your
                    favorite recipes with us. Whether you're a seasoned chef or a culinary
                    newcomer, we want to hear from you. Share your story, your traditions,
                    and your creations with our community of food lovers. By adding your
                    recipe, you'll be contributing to a vibrant and diverse collection of
                    dishes from around the world. So go ahead, share your passion for
                    food, and let's cook up something amazing together!
                </p>
            </Container>

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="recipeName">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="Name" placeholder="Enter Recipe Here"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor"/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default GridComplexExample;
