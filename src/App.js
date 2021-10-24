// Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Appointment from './components/Appointment/Appointment';
import Doctors from './components/Doctors/Doctors';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import PatientReviews from './components/PatientReviews/PatientReviews';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import Success from './components/Success/Success';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

// Import Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import Provider
import DoctorsProvider from './context/DoctorsProvider';
import AuthProvider from './context/AuthProvider';
import BlogProvider from './context/BlogProvider';
import ReviewProvider from './context/ReviewProvider';
import ServiceProvider from './context/ServiceProvider';

function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <DoctorsProvider>
          <BlogProvider>
            <ReviewProvider>
              <Router>
                <Header></Header>

                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>

                  <Route exact path="/home">
                    <Home></Home>
                  </Route>

                  <Route exact path="/service">
                    <Service showAll={true}></Service>
                  </Route>

                  <PrivateRoute exact path="/service/:id">
                    <ServiceDetails></ServiceDetails>
                  </PrivateRoute>

                  <Route exact path="/doctors">
                    <Doctors showAll={true}></Doctors>
                  </Route>

                  <PrivateRoute exact path="/doctor/:id">
                    <DoctorDetails></DoctorDetails>
                  </PrivateRoute>

                  <PrivateRoute exact path="/blog">
                    <Blog showAll={true}></Blog>
                  </PrivateRoute>

                  <PrivateRoute exact path="/blog/:id">
                    <BlogDetails></BlogDetails>
                  </PrivateRoute>

                  <Route exact path="/review">
                    <PatientReviews showAll={false}></PatientReviews>
                  </Route>

                  <PrivateRoute exact path="/review/:id">
                    <ReviewDetails></ReviewDetails>
                  </PrivateRoute>

                  <Route exact path="/about">
                    <About></About>
                  </Route>

                  <PrivateRoute exact path="/appointment">
                    <Appointment></Appointment>
                  </PrivateRoute>

                  <Route exact path="/contact">
                    <Contact></Contact>
                  </Route>

                  <Route exact path="/login">
                    <Login></Login>
                  </Route>

                  <Route exact path="/signup">
                    <Signup></Signup>
                  </Route>

                  <Route exact path="/success">
                    <Success></Success>
                  </Route>

                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>

                <Footer></Footer>
              </Router>
            </ReviewProvider>
          </BlogProvider>
        </DoctorsProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}

export default App;
