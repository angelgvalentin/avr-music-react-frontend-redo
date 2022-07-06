import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./Details.css";

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
    let {name, id, description, price, image, stock} = itemDetails;
    return (
        <div>
            <div className="details-main-container">
                <div className="left-container">
                    <div className="image-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="description-container">
                        <h4>Details Page: </h4>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="right-container">
                    <div className="cart-container">
                        <h4>{name}</h4>
                        <p>{price}</p>
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
                            Orders placed before 3 p.m. ET usually ship the same
                            business day (except weekends and holidays).
                        </p>
                    </div>
                </div>
            </div>
            <h1>Details Page: {name}</h1>
            <h1>Details Page: {price}</h1>
            <h1>Details Page: {stock}</h1>
        </div>
    );
};

export default Details;
