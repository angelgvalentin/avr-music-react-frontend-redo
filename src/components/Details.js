import React, {useState} from "react";

const Details = (props) => {
    let inventory = props.inventory;

    const [itemDetails, setItemDetails] = useState(inventory);

    console.log(inventory);

    return <div>Details Page</div>;
};

export default Details;
