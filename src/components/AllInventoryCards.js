import React, {useState} from "react";

function AllInventoryCards(props) {
    const [cards, SetCards] = useState(props.inventory);

    console.log("props.inventory is " + props.inventory);

    return (
        <div className="AllInventoryCards">
            <h2>ALL CARDS COMPONENT</h2>

            <h3>{cards[1].name}</h3>

            {cards.map((card) => {
                return (
                    <div>
                        <h3>{card.name}</h3>
                        <h3>{card.category}</h3>
                        <h3>{card.price}</h3>
                        <h3>{card.image}</h3>
                        <h3>{card.video}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default AllInventoryCards;
