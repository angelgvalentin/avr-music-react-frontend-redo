import {Carousel} from "bootstrap";
import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const Guitars = (props) => {
    let inventory = props.inventory;

    const [allGuitars, setAllGuitars] = useState(inventory);

    // console.log(props.inventory);

    const filterByCategory = () => {
        const result = inventory.filter((item) => {
            return item.category === "Guitar";
        });
        console.log(result);
        setAllGuitars(result);
        console.log("allGuitars" + allGuitars);
    };

    useEffect(() => {
        filterByCategory();
    }, [inventory]);

    return (
        <>
            <h1 className="carousel-banner">Placeholder</h1>
            {allGuitars.length === undefined || allGuitars.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div>Guitars Page</div>
                    <div className="grid">
                        {allGuitars.map((guitar) => {
                            const {id, name, image, price} = guitar;
                            return (
                                <a href="#" className="cardLinks" key={id}>
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
                                </a>
                            );
                        })}
                    </div>
                </>
            )}
        </>
    );
};

export default Guitars;
