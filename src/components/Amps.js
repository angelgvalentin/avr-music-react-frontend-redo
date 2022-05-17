import {Carousel} from "bootstrap";
import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const Amps = (props) => {
    let inventory = props.inventory;

    const [allAmps, setAllAmps] = useState(inventory);

    // console.log(props.inventory);

    const filterByCategory = () => {
        const result = inventory.filter((item) => {
            return item.category === "Amp";
        });
        console.log(result);
        setAllAmps(result);
        console.log("allAmps" + allAmps);
    };

    useEffect(() => {
        filterByCategory();
    }, [inventory]);

    return (
        <>
            <h1 className="carousel-banner">Placeholder</h1>
            {allAmps.length === undefined || allAmps.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div>Amps Page</div>
                    <div className="grid">
                        {allAmps.map((amp) => {
                            const {id, name, image, price} = amp;
                            return (
                                <a href="#" className="cardLinks">
                                    {" "}
                                    <div key={id}>
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
                                </a>
                            );
                        })}
                    </div>
                </>
            )}
        </>
    );
};

export default Amps;
