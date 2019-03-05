import React, {Component} from 'react';
import Head from './head.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Photos from './photos.jsx';
import Stories from './stories.jsx';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component { 
	render() {
		return(
  <Router>
	  <div>
        
      <Route  component={Head} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/photos" component={Photos}/>
      <Route path="/stories" component={Stories}/>
      </div>
  </Router>
		)};
}


export default App;
