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
		      227 E 30th Street #758E<br/>
	              NYC, New York,10016
          </li>
      </ul>

    )}};

export default Foot;
