import "./App.css";

import {Scrollbar} from "smooth-scrollbar-react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Slideshow from "./Components/Slider/Slideshow";
import Collect from "./Components/Collect/Collect";
import PinkMan from "./Components/PinkMan/PinkMan";
import SlideHead from "./Components/SlideHead/SlideHead";
import TopSellerSlider from "./Components/Slider/TopSellerSlider";
import HotCollectionSlider from "./Components/Slider/HotCollectionSlider";
import FilterPart from "./Components/FilterPart/FilterPart";


function App() {
    return (
        <div className="App">
            <Scrollbar
                plugins={{
                    overscroll: {
                        effect: "bounce",
                    },
                }}
            >
                <div className={`list-data`}>
                    <Navbar/>
                    <Collect ToShow={3} speed={500} DotsShow={false} Infinite={false} ToScroll={3}/>
                    <SlideHead className={`pt-100`} icon={`fire`} head={`Trending auctions`}/>
                    <Slideshow ToShow={4} speed={500} DotsShow={false} Infinite={false} ToScroll={4}/>


                    <SlideHead className={`pt-100`} icon={`yeah`} head={`Top sellers`}/>
                    <TopSellerSlider ToShow={4} speed={500} DotsShow={false} Infinite={false} ToScroll={4}/>


                    <SlideHead className={`pt-100`} icon={`death`} head={`Hot collections`}/>
                    <HotCollectionSlider ToShow={4} speed={500} DotsShow={false} Infinite={false} ToScroll={4}/>
                    <PinkMan/>

                    <FilterPart/>
                    <Footer/>
                </div>
            </Scrollbar>
        </div>
    );
}

export default App;
