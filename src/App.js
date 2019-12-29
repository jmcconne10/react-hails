import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import MyRides from './MyRides';
import SubmitRide from './SubmitRide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/submitride" component={SubmitRide} />
              <Route exact path="/myrides" component={MyRides} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;