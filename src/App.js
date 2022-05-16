import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import axios from "axios";
import {useState, useEffect, Fragment} from "react";
import AllInventoryCards from "./components/AllInventoryCards";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./components/Details";

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
        <Router>
            <div className="App">
                <Navbar />
                <main id="mainContainer">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <CarouselBanner />
                                    {inventory.length === 0 || inventory.length === undefined ? <h3>Loading...</h3> : <AllInventoryCards inventory={inventory} />}
                                </>
                            }
                        ></Route>
                        <Route
                            path="details"
                            element={
                                <>
                                    <CarouselBanner />
                                    <Details />
                                </>
                            }
                        ></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
