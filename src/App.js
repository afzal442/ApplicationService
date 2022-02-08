import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Routing,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu, FoodRecipe } from './container';
import { Navbar } from './components';
import './App.css';
// import BookOrder from './components/BookOrder/BookOrder';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routing>
          <Route exact path="/food-recipe" element={<FoodRecipe />} />
        </Routing>
      </ Router>
      <Router>
        <Routing>
          <Route exact path="/about" element={<AboutUs />} />
        </Routing>
      </ Router>
      <Router>
        <Routing>
          <Route exact path="/" element={<Header />} />
        </Routing>
      </Router>
      <Router>
        <Routing>
          <Route exact path="/menu" element={<SpecialMenu />} />
        </Routing>
      </Router>
      {/* <Router>
        <Routing>
          <Route exact path="/bookyourorder" element={ <OrderList />} />
        </Routing>
      </Router> */}
      {/* <BookOrder /> */}
      <Chef />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
