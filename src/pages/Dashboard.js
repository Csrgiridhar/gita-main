import React from "react";
import './Dashboard.css'
import {RxDashboard  } from "react-icons/rx";
import { MdOutlineExitToApp } from "react-icons/md";
// import Card from 'react-bootstrap/Card';
// import Img from './background1.jpg'
import Img1 from './background2.webp'


import { useState, useRef } from 'react';
// import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from './background1.jpg'
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

//   const show_menu=()=>{
//     var menu = document.getElementById('dropdown_menu');

//     if(menu.style.display === 'block'){
//         menu.style.display = 'none';
//     }else {
//         menu.style.display = 'block';                    
//     }
// }
  return (
    <div className="back">
      <div className="div1">
      <div className="div2">
        <h2>
          <RxDashboard />
        </h2>
        <h2 className="dashboard1">Dashboard</h2>
      </div>
      <div className="div3">
          <h5 className="about"><Link to='/About' className="about1">About</Link></h5>
          <h5 className="about">Contact</h5>
          <div >
              <img className="img1" ref={target} onClick={() => setShow(!show)} src={Image} alt="img" />
              {/* <Button ref={target} onClick={() => setShow(!show)}>
               <img className="img1" src={Image} alt="img" />

      </Button> */}
      <Overlay  target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example"  {...props}>
            <div className="div4" >
            <h6 className="admin">Admin</h6>
            <img className="img2"  src={Image} alt="img" /> 
            <p>Csr.Giridhar</p>
            <p >Giridhar123@gmail.com</p>
            <button className="button1">Turn on Sync</button>
            </div>
            <h6 className="h6"><MdOutlineExitToApp/> Log out</h6>
          </Tooltip>
        )}
      </Overlay>
          </div>
      </div>
      </div>

      <div className="d2">
       <div className="div5">
      
          <div className="div6">
            <h3>
              <RxDashboard  />
            </h3>
            <h3 className="dashboard2">Dashboard</h3>
          </div>
          <img className="img3" src={Image} alt="img" />
          <h5 className="csr">Csr.Giridhar</h5>
          <h6 className="csr1">Home</h6>
          <h6 className="csr1">About</h6>
          <h6 className="csr1">Contact</h6>

        </div> 

        <div className="flex1">
          {/* <div>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Img}  />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Img1}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div> */}
        <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        </div>

        <div ><img className="d1" src={Img1} alt="img" /></div>
        </div>
      </div>

{/* <div class="dropdown">
  <button>Profile</button>
  <div class="dropdown-options">
      <h6 className="csr1">Home</h6>
      <h6 className="csr1">About</h6>
      <h6 className="csr1">Contact</h6>
  </div>
</div> */}


{/* <div className="dropdown_button"  onClick={show_menu}>Schedule 1</div>
    <div id="dropdown_menu" className="hidden_menu">
        <ul>
            <li>option 1</li>
            <li>option 2</li>
        </ul>           
    </div> */}
      
    </div>
  );
};

export default Dashboard;
