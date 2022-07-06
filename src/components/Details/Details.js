import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./Details.css";
import {Button} from "react-bootstrap";
import ReactPlayer from "react-player";

const Details = () => {
    const params = useParams();

    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8080/inventory/" + params.id)
            .then((response) => {
                setItemDetails(response.data);
                console.log(" item details is " + itemDetails);
            });
        console.log(params);
    }, [params]);
    let {name, id, description, price, image, stock, video} = itemDetails;
    return (
        <div>
            <div className="details-main-container">
                <div className="left-container">
                    <div className="image-container">
                        <img className="image" src={image} alt={name} />
                    </div>
                    <div className="description-container">
                        <h4>Details Page: </h4>
                        <p>{description}</p>
                    </div>

                    <div className="video-container">
                        <ReactPlayer url={video} />
                    </div>
                </div>
                <div className="right-container">
                    <div className="cart-container">
                        <h4>{name}</h4>
                        <h2 className="price-tag">${price}</h2>
                        <div className="stockCheck-container">
                            <p>
                                {stock > 0 ? (
                                    <h3 className="inStock-tag">
                                        In Stock & Ready to Ship
                                    </h3>
                                ) : (
                                    <h3 className="outOfStock-tag">
                                        Currently Out of Stock
                                    </h3>
                                )}
                            </p>
                            <p>
                                Orders placed before 3 p.m. ET usually ship the
                                same business day (except weekends and
                                holidays).
                            </p>
                        </div>
                        <Button variant="danger" size="lg">
                            Add to Cart
                        </Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
