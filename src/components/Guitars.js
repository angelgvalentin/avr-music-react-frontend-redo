import {Carousel} from "bootstrap";
import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

const Guitars = (props) => {
    const [allGuitars, setAllGuitars] = useState(props.inventory == "Guitar");

    return (
        <>
            <h1 className="carousel-banner">Placeholder</h1>
            <div>Guitars Page</div>

            <div className="grid"></div>
        </>
    );
};

export default Guitars;
