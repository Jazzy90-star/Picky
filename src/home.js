// Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "./card";

function Home() {
  const apiKey = "f4149ce4f2a748eab0de70a3231e9852";

  return (
    <>
      <Container>
        <div id="img" style={{ height: "300px", overflow: "hidden" }}>
          <img
            src="https://cdn.vectorstock.com/i/500p/75/34/cooking-ingredients-recipe-book-and-kitchen-vector-40117534.jpg"
            alt="Placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Container id="intro">
          <p>
            <h3>Welcome to The Picky Eater!</h3>
            <br />
            Find personalized recipes based on your food preferences. Select
            your dietary needs, ingredient preferences, and cuisine types to get
            tailored recipe suggestions. Start cooking your favorite dishes
            today!
          </p>
        </Container>
        <Container>
          <Row>
            <Col>
              <HomeCard
                dietType="Gluten Free"
                endpoint={`https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&apiKey=${apiKey}`}
              />
            </Col>
            <Col>
              <HomeCard
                dietType="Dairy Free"
                endpoint={`https://api.spoonacular.com/recipes/complexSearch?intolerances=dairy&apiKey=${apiKey}`}
              />
            </Col>
            <Col>
              <HomeCard
                dietType="Vegetarian"
                endpoint={`https://api.spoonacular.com/recipes/complexSearch?diet=ketogenic&apiKey=${apiKey}`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeCard
                dietType="Vegetarian"
                endpoint={`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
