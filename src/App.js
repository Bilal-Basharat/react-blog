import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </div>
  </Router>
  );
};

export default App;
