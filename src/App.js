import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path ="/">
      <Home/>
        </Route>
        <Route exact path ="/portfolio">
      <Portfolio/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
