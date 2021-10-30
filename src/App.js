// import About from './Pages/Home/About/About';
// import Carousel from './Pages/Home/Carousel/Carousel';
// import TourPackages from './Pages/Home/TourPackages/TourPackages';
// import WhyUs from './Pages/Home/WhyUs/WhyUs';
// import Footer from './Pages/SharedComponents/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Navbar from './Pages/SharedComponents/Navbar/Navbar';
import SignIn from './Pages/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar></Navbar>
      <SignIn></SignIn>
      </AuthProvider>
    </div>
  );
}

export default App;
