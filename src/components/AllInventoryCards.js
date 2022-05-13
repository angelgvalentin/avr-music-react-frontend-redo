import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import {Container, Col, Button} from "react-bootstrap";

function AllInventoryCards(props) {
    const [cards, SetCards] = useState(props.inventory);
    //
    return (
        <div className="AllInventoryCards">
            <h2>ALL CARDS COMPONENT</h2>

            {cards.map((card) => {
                return (
                    <div key={card.id}>
                        <Card style={{width: "10rem"}}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        {/* <h3>{card.name}</h3>
                        <h3>{card.category}</h3>
                        <h3>{card.price}</h3>
                        <h3>{card.image}</h3>
                        <h3>{card.video}</h3> */}
                    </div>
                );
            })}
        </div>
    );
}

export default AllInventoryCards;
