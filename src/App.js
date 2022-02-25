import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';


const App = () => {

  return (
    <div className ='App'>
      <header>
        <Link to = '/'>Home</Link>
        <Link to = '/pizza' id ='order-pizza'>Order</Link>
      </header>
      <Switch>
        <Route exact path = '/'>
          <h1>Lambda Eats</h1>
        </Route>
        <Route path = '/pizza'>
          <h1>Make Your Order</h1>
          <PizzaForm/>
        </Route>
        <Route path = '/pizza/:slug'>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
