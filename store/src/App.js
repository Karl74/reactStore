import {Switch, Route} from 'react-router-dom'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import Default from "./components/Default"
import Details from "./components/Details"
import Cart from "./components/Cart"


function App() {
  return (
    <React.Fragment>
     <NavBar/>
     <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/> 
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>

     </Switch>

    </React.Fragment>
  );
}

export default App;
