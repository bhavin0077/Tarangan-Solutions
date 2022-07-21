import React, { Component } from 'react';
import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
  
// import Home component
import Service from "./components/Service";
import Services from "./components/Services"
import Development from './components/Development';
import Digital from './components/Digital';
import Product from './components/Product'
import emailserver from "./components/emailserver"
import main from './components/main';

class App extends Component {
  render(){
  return (
<>  
<BrowserRouter>
      <div>         
        <Switch> 
          <Route exact path="/" component={main} />    
          <Route exact path="/Services" component={Services} />
          <Route path="/Development" component={Development} />
          <Route path="/Digital" component={Digital} />
          <Route path="/Service" component={Service} />
          <Route path="/Product" component={Product} />
          <Route path="/email" component={emailserver} />
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
}

export default App;
