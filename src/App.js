import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouter path="/services">
              <Services></Services>
            </PrivateRouter>
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/service/:serviceId">
              <Review></Review>
            </Route>
            <Route path="/map">
              <Map></Map>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
