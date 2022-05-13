import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main id="mainContainer">
                <CarouselBanner />
            </main>
        </div>
    );
}

export default App;
