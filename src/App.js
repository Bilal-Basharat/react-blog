import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Write from './pages/write';
import Posts from './Components/posts/posts';
import Footer from './Components/footer'
import Post from './Components/post/post';
const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/write" exact component={Write} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/post/:blogKey" exact component={Post} />
        </Switch>
<Footer />        
    </div>
  </Router>
  );
};

export default App;
