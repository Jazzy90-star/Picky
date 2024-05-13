import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

function SmallExample() {
    return (
        <Container>
            <div id="img" style={{height: "300px", overflow: "hidden"}}>
                <img
                    src="your-image-url.jpg"
                    alt="Placeholder"
                    style={{width: "100%", height: "100%", objectFit: "cover"}}
                />
            </div>
            <h2>Choose Your Preference</h2>
            <Container id="intro">
                <p>
                    <br/>
                    Take control of your cooking with our Recipe Finder! Do you have
                    dietary restrictions or preferences? Do you have ingredients you love
                    or hate? Our tool lets you customize your recipe search to suit your
                    needs. Simply select the ingredients you want to use or avoid, and
                    we'll find the perfect recipes for you. Whether you're a foodie, a
                    busy parent, or a health enthusiast, our Recipe Finder makes cooking
                    easy and fun. Start searching today and discover new favorite dishes!
                </p>
            </Container>
            {/* Search Bar */}
            <Row>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="searchBar">
                            <Form.Control
                                type="search"
                                placeholder="Search for ingredients..."
                            />
                        </Form.Group>
                        <Button variant="outline-secondary">Search</Button>{" "}
                    </Form>
                </Container>
            </Row>

            {/* Spices Column */}
            <Row>
                <Container id="preferences">
                    <Col md={6}>
                        <h3>Spices</h3>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Preferences</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Spice 1</td>
                                <td>
                                    <Form>
                                        <Form.Check type="checkbox" label="Love It" inline/>
                                        <Form.Check type="checkbox" label="Like It" inline/>
                                        <Form.Check
                                            type="checkbox"
                                            label="Don't Like or Dislike"
                                            inline
                                        />
                                        <Form.Check type="checkbox" label="Hate It" inline/>
                                        <Form.Check type="checkbox" label="Allergic" inline/>
                                    </Form>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>{" "}
                    <Pagination>
                        <Pagination.First/>
                        <Pagination.Prev/>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next/>
                        <Pagination.Last/>
                    </Pagination>
                </Container>

                {/* Ingredients Column */}
                <Container id="preferences">
                    <Col md={6}>
                        <h3>Ingredients</h3>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Preferences</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ingredient 1</td>
                                <td>
                                    <Form>
                                        <Form.Check type="checkbox" label="Love It" inline/>
                                        <Form.Check type="checkbox" label="Like It" inline/>
                                        <Form.Check
                                            type="checkbox"
                                            label="Don't Like or Dislike"
                                            inline
                                        />
                                        <Form.Check type="checkbox" label="Hate It" inline/>
                                        <Form.Check type="checkbox" label="Allergic" inline/>
                                    </Form>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Container>
            </Row>
            <Pagination>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </Container>
    );
}

export default SmallExample;
