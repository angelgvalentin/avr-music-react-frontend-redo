import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./Details.css";
import {Button, Modal} from "react-bootstrap";
import ReactPlayer from "react-player";

const Details = () => {
    const params = useParams();

    const [itemDetails, setItemDetails] = useState({});

    //modal hooks and functions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/inventory/" + params.id)
            .then((response) => {
                setItemDetails(response.data);
                console.log(" item details length is " + itemDetails[0]);
            });
        console.log(params);
    }, []);
    let {name, id, description, price, image, stock, video, brand, brandLogo} =
        itemDetails;

    console.log(itemDetails[0]);
    return (
        <div>
            {price === 0 || price === undefined ? (
                <h3>Loading...</h3>
            ) : (
                <div className="details-main-container">
                    <div className="left-container">
                        <div className="image-container">
                            <img
                                className="image-on-page"
                                src={image}
                                alt={name}
                                onClick={handleShow}
                            />
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
                            <div className="logo-container">
                                <img
                                    className="brand-logo-image"
                                    src={brandLogo}
                                    alt={brand}
                                />
                            </div>
                            <h4>{name}</h4>
                            <h2 className="price-tag">
                                ${price.toLocaleString()}
                            </h2>
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
                                    Orders placed before 3 p.m. ET usually ship
                                    the same business day (except weekends and
                                    holidays).
                                </p>
                            </div>
                            <Button variant="danger" size="lg">
                                Add to Cart
                            </Button>{" "}
                        </div>
                    </div>
                </div>
            )}

            <Modal show={show} onHide={handleClose}>
                <div className="modal-image-container">
                    <img className="image-on-modal" src={image} alt={name} />
                </div>
            </Modal>
        </div>
    );
};

export default Details;
