import React, {useState} from "react";

import {Card} from "react-bootstrap";

const AllInventoryCards = (props) => {
    const [cards, SetCards] = useState(props.inventory);

    return (
        <div className="AllInventoryCards">
            <h2>ALL CARDS COMPONENT</h2>

            <div className="grid">
                {cards.map((card) => {
                    return (
                        <a href={"/details/" + card.id} className="cardLinks" key={card.id}>
                            {" "}
                            <div>
                                <Card style={{width: "18rem"}}>
                                    <div className="cardImageBox">
                                        <img className="cardImage" src={card.image} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title>{card.name}</Card.Title>
                                        <div className="cardPrice">
                                            <Card.Text>${card.price}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default AllInventoryCards;
