import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Foot extends Component { 
	render () {
		return (
      <ul className="footer">
	      <li>
		      &copy; HuaZhou 2019.03
          </li>
	      <li>
		    You are the 1st visitor 
          </li>
      </ul>

    )}};

export default Foot;
