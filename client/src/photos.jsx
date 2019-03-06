import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
//import myphoto from "./huazhou_pic.JPG";


const slideImages=[
	"../static/huazhou1.JPG",
	"../static/huazhou2.PNG",
	"../static/huazhou3.JPG",
	"../static/huazhou4.JPG",
	"../static/huazhou5.JPG",
	  ];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
		<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}



//const lit=require('../static/huazhou_pic.JPG');
class Photos extends Component {
  render() {
    return (
      <div className="maintext">
          <h1 style={{paddingTop:'30px'}}>
	    Some Photos of me
          </h1>
	  <Slideshow/>

      </div>
    );
  }
}

export default Photos; 
