import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";
import Navbar from './components/navbar/Navbar';
import Mobiles from './components/mobiles/Mobiles';
import Laptops from './components/laptops/Laptops';
import  Test from './components/test';
// import Laptops from './components/laptops/Laptops';
import Notfound from './components/notfound/Notfound';
import Homecontent from './components/home/Home';
import Fiction from './components/fiction/Fiction';
import EntranceExams from './components/entrance-exams/Entrance-exams';
import Cart from './components/cart/Cart';

function App() {
  return (
      <React.Fragment>
        <Router>

          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Homecontent} />
            <Route path="/fiction" component={Fiction} />
            <Route path="/entrance-exams" component={EntranceExams} />
            <Route path="/mobiles" component={Mobiles} />
            <Route path="/laptops" component={Laptops} />
            <Route path="/cart" component={Cart} />
            <Route component={Notfound} />
        </Switch>
      </Router>
    </React.Fragment>
      
    );
}

export default App;

      
 