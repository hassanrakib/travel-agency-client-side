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
import PrivateRoute from './Pages/SharedComponents/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AddPackage from './Pages/AddPackage/AddPackage';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';


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
            <PrivateRoute path='/place-order/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/add-package'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/my-bookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/all-bookings'>
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </TourPackagesProvider>
    </AuthProvider>
  );
}

export default App;
