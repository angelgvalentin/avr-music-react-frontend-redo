import {Carousel} from "bootstrap";
import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Pedals = (props) => {
    let inventory = props.inventory;

    const [allPedals, setAllPedals] = useState(inventory);

    // console.log(props.inventory);

    const filterByCategory = () => {
        const result = inventory.filter((item) => {
            return item.category === "Pedal";
        });
        console.log(result);
        setAllPedals(result);
        console.log("allPedals" + allPedals);
    };

    useEffect(() => {
        filterByCategory();
    }, [inventory]);

    return (
        <>
            <h1 className="carousel-banner">Placeholder</h1>
            {allPedals.length === undefined || allPedals.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div>Pedals Page</div>
                    <div className="grid">
                        {allPedals.map((pedal) => {
                            const {id, name, image, price} = pedal;
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
                </>
            )}
        </>
    );
};

export default Pedals;
