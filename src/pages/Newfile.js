import React, { Component } from 'react'
import Newfile1 from './Newfile1'

export default class Newfile extends Component {
    state=
        {
        name:"Realme",
        age:"128gb",
        gender:"6gb",
        image:"https://th.bing.com/th/id/OIP.NR9WNA-eGJQj7tftHZjm0AHaHa?pid=ImgDet&rs=1"
        }
        // {
        //     name1:"oppo",
        //          age1:"256gb",
        //         gender1:"8gb",
        //          image1:"https://th.bing.com/th/id/OIP.NR9WNA-eGJQj7tftHZjm0AHaHa?pid=ImgDet&rs=1"   
        // }]
        
    
    // state={
    //     name:"oppo",
    //     age:"256gb",
    //     gender:"8gb",
    //     image:"https://th.bing.com/th/id/OIP.NR9WNA-eGJQj7tftHZjm0AHaHa?pid=ImgDet&rs=1"
        
    // }

    
  render() {
    return (
      <div>
        <center>
            <Newfile1 name={this.state.name} age={this.state.age} gender={this.state.gender} image={this.state.image}/>
            {/* <Newfile1 name1={this.state.name1} age1={this.state.age1} gender1={this.state.gender1} image1={this.state.image1}/> */}
         </center>


        {/* <form onSubmit={handlesubmit}>
            <input type='text' placeholder='First name' name='First_Name'  onChange={handleChange} value={formData.First_Name} /><br></br>
            <input type='text' placeholder='Last name'  name='Last_Name'  onChange={handleChange}  value={formData.Last_Name}/><br></br>
            <input type='email' placeholder='Email'  name='Email'   onChange={handleChange}  value={formData.Email}/><br></br>
            <button type='submit' >submit</button>
        </form> */}
      </div>
    )
  }
}
