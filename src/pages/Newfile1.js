import React, { Component } from 'react'
import './About.css'
export default class Newfile1 extends Component {
  render() {
    return (
        //   <div>
      <div className='card1'>
        {/* <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.gender}</h1>
        <img src={this.props.image} alt=''/> */} 

<div  className='card2'  >
      <img className='image' src={this.props.image} alt='' />
      <h4>{this.props.name}</h4>
      <h4>{this.props.age}</h4>
      <h4 className='features'>Features:</h4>
      <h5>{this.props.gender}</h5>

      </div>
      </div>

/* <div className='card1'>


<div  className='card2'  >
<img className='image' src={this.props.image} alt='' />
<h4>{this.props.name}</h4>
<h4>{this.props.age}</h4>
<h4 className='features'>Features:</h4>
<h5>{this.props.gender}</h5>

</div>
</div>
</div> */
    )
  }
}
