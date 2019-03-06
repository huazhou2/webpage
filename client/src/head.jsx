import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Head extends Component { 
	render () {
		return (
      <ul className="header">
	      <li id='header1'>
		      <Link to="/" className='link' >Hua Zhou's Home</Link>
          </li>
			  <li>
		  <Link to="/about" className='link' >About</Link>
          </li>
          <li>
		  <Link to="/photos" className='link' >Photos</Link>
          </li>
          <li>
		  <Link to="/stories" className='link' >Stories</Link>
          </li>
          <li>
		  <Link to="/tools" className='link' >Tools</Link>
          </li>
      </ul>

    )}};

export default Head;
