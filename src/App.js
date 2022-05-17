import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useState, useEffect, Fragment} from "react";
import AllInventoryCards from "./components/AllInventoryCards";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./components/Details";
import Guitars from "./components/Guitars";
import Amps from "./components/Amps";
import Pedals from "./components/Pedals";
import SaleListings from "./components/SaleListings";
import Cart from "./components/Cart";
import Navbar2 from "./components/Navbar2";

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
                {/* <Navbar /> */}
                <Navbar2 />
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
                        <Route path="details/:id" element={<Details inventory={inventory} />}></Route>
                        <Route path="guitars" element={<Guitars inventory={inventory} />}></Route>
                        <Route path="amps" element={<Amps inventory={inventory} />}></Route>
                        <Route path="pedals" element={<Pedals inventory={inventory} />}></Route>
                        <Route path="your-listings" element={<SaleListings />}></Route>
                        <Route path="cart" element={<Cart />}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
