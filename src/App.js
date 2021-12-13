import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/products'>
          <Products />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/product/:id'>
          <SingleProduct />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
      <Switch>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
