import React, {useState} from "react";

import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const AllInventoryCards = (props) => {
    const [cards, SetCards] = useState(props.inventory);

    return (
        <div className="AllInventoryCards">
            <h2>ALL CARDS COMPONENT</h2>

            <div className="grid">
                {cards.map((card) => {
                    const {id, name, price, image} = card;
                    return (
                        <Link to={"/details/" + id} key={id}>
                            {" "}
                            <div>
                                <Card style={{width: "18rem"}}>
                                    <div className="cardImageBox">
                                        <img className="cardImage" src={image} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <div className="cardPrice">
                                            <Card.Text>${price}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AllInventoryCards;
