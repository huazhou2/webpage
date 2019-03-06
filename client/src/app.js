import React, {Component} from 'react';
import Head from './head.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Photos from './photos.jsx';
import Stories from './stories.jsx';
import Tools from './tools.jsx';
import Foot from './foot.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component { 
	render() {
		return(
  <Router>
	  <ul className='mainpage'>
	<li>
        
      <Route  component={Head} /> </li>
			<li className='mainbody'>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/photos" component={Photos}/>
      <Route path="/stories" component={Stories}/>
      <Route path="/tools" component={Tools}/></li>
			<li>
      <Route  component={Foot} /></li>
      </ul>
  </Router>
		)};
}


export default App;
