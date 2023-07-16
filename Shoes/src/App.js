import "./App.css";
import BestOfBest from "./pages/BestOfBest";
import Footer from "./pages/Footer";
import GrowCollection from "./pages/GrowCollection";
import MainPage from "./pages/MainPage";
import ShoesCollected from "./pages/ShoesCollected";
import TheyLoveUs from "./pages/TheyLoveUs";
import WhyJoinUs from "./pages/WhyJoinUs";

function App() {
  return (
    <div className="bg-amber-50">
      <MainPage />
      <BestOfBest />
      <WhyJoinUs />
      <TheyLoveUs />
      <GrowCollection />
      <ShoesCollected />
      <Footer />
    </div>
  );
}

export default App;
