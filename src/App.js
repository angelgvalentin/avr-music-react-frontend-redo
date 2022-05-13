import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import axios from "axios";
import {useState, useEffect} from "react";
import AllInventoryCards from "./components/AllInventoryCards";

const App = () => {
    const [inventory, setInventory] = useState([]);

    const getAllInventory = () => {
        axios.get("http://localhost:8080/inventory").then((response) => {
            setInventory(response.data);
        });
    };

    useEffect(() => {
        getAllInventory();
    }, []);

    return (
        <div className="App">
            <Navbar />
            <main id="mainContainer">
                <CarouselBanner />
                <AllInventoryCards inventory={inventory} />
            </main>
        </div>
    );
};

export default App;
