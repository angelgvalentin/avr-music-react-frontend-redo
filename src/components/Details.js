import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Details = () => {
    const params = useParams();

    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/inventory/" + params.id).then((response) => {
            setItemDetails(response.data);
            console.log(" item details is " + itemDetails);
        });
        console.log(params);
    }, [params]);
    let {name, id, description, price} = itemDetails;
    return (
        <div>
            <h1>Details Page: </h1>
            <h1>Details Page: {name}</h1>
            <h1>Details Page: {price}</h1>
            <h1>Details Page: {description}</h1>
            <h1>Details Page: {id}</h1>
        </div>
    );
};

export default Details;
