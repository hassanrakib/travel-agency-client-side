import About from './Pages/Home/About/About';
import Carousel from './Pages/Home/Carousel/Carousel';
import TourPackages from './Pages/Home/TourPackages/TourPackages';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import Navbar from './Pages/SharedComponents/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <About></About>
      <TourPackages></TourPackages>
      <WhyUs></WhyUs>
    </div>
  );
}

export default App;
