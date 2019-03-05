import React, { Component } from 'react';
import myphoto from "./huazhou_pic.JPG";

class Photos extends Component {
  render() {
    return (
      <div className="maintext">
          <h1 style={{paddingTop:'30px'}}>
	    Some Photos of me
          </h1>
	  <img src={myphoto} alt='failed' style={{width:'500px', height:'500px'}}></img>
      </div>
    );
  }
}

export default Photos; 
