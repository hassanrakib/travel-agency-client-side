import About from './Pages/Home/About/About';
import Carousel from './Pages/Home/Carousel/Carousel';
import TourPackages from './Pages/Home/TourPackages/TourPackages';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import Footer from './Pages/SharedComponents/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Navbar from './Pages/SharedComponents/Navbar/Navbar';
import SignIn from './Pages/SignIn/SignIn';
import TourPackagesProvider from './contexts/TourPackagesProvider';


function App() {
  return (
    <AuthProvider>
      <TourPackagesProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Carousel></Carousel>
              <About></About>
              <TourPackages></TourPackages>
              <WhyUs></WhyUs>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </TourPackagesProvider>
    </AuthProvider>
  );
}

export default App;
