// HomeCard.js
import React, {useEffect, useState} from "react";
import {Card, Carousel} from "react-bootstrap";

function HomeCard({dietType, apiKey, endpoint}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?diet=${endpoint}&apiKey=${apiKey}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setRecipes(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [dietType, apiKey, endpoint]);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{dietType}</Card.Title>
                <Carousel>
                    {recipes.map((recipe) => (
                        <Carousel.Item key={recipe.id}>
                            <img
                                className="d-block w-100"
                                src={recipe.image}
                                alt={recipe.title}
                            />
                            <Carousel.Caption>
                                <h3>{recipe.title}</h3>
                                <p>Ready in {recipe.readyInMinutes} minutes</p>
                                <p>Servings: {recipe.servings}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Card.Body>
        </Card>
    );
}

export default HomeCard;
