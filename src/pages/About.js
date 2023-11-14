import React from 'react'
import './About.css'
import {RxDashboard  } from "react-icons/rx";
import { MdOutlineExitToApp } from "react-icons/md";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import Image from './background1.jpg'
import { useState, useRef } from 'react';




    

const About = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

     const data = [
        {
          id: 1,
          title: "Realme",
          content: "128gb Storage",
          ram:"8gb Ram",
          image: "https://th.bing.com/th/id/OIP.NR9WNA-eGJQj7tftHZjm0AHaHa?pid=ImgDet&rs=1"
        },
        {
          id: 2,
          title: "Iphone",
          content: "64gb Storage",
          ram:"4gb Ram",
          image: "https://d1eh9yux7w8iql.cloudfront.net/product_images/412301_7a74993c-e23a-48f3-a1b9-96e5ea247053.jpg"
        },
        {
          id: 3,
          title: "oppo",
          content: "256gb Storage",
          ram:"8gb Ram",
          image: "https://espachollos.com/wp-content/uploads/2021/05/oppo-a94-oppo.jpg"
        },
        {
        id: 4,
          title:"Oppo",
          content: "128gb Storage",
          ram:"6gb Ram",
          image: "https://espachollos.com/wp-content/uploads/2021/05/oppo-a94-oppo.jpg"
        },
        {
          id: 5,
            title: "lenovo",
            content: "i3-5th Gen",
            ram:"Windows 11",
            image: "https://i5.walmartimages.com/asr/9615f50a-2eb4-47ad-afca-3d1c03ccb18a.12c9815e0c7ab3f1bc6c4f47343c321d.jpeg"
          },
          {
            id: 6,
              title: "Realme",
              content: "i5-3rd Gen",
              ram:"Windows 10",
              image: "https://carlosvassan.com/wp-content/uploads/2021/08/realme-book-uscita-data-presentazione-01.jpg"
            },
            {
              id: 7,
                title: "Hp",
                content: "i5-5th Gen",
                ram:"Ubuntu",
                image: "https://images-na.ssl-images-amazon.com/images/I/71ZsieZiS3L._SL1500_.jpg"
              },
              {
                id: 8,
                  title: "Dell",
                  content: "i3-5th Gen",
                  ram:"Kali Linux",
                  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339275_rd.jpg"
                },
                {
                  id: 9,
                    title: "Studio2",
                    content: "Wireless Headphones",
                    ram:"With Mic",
                    image: "https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg"
                  },
                  {
                    id: 10,
                      title: "Phillips",
                      content: "Wired Earphones",
                      ram:"With Mic",
                      image: "https://images.philips.com/is/image/PhilipsConsumer/SHE3205BK_00-IMS-en_AU?$jpglarge$&wid=1250"
                    },
                    {
                      id: 11,
                        title: "JBL",
                        content: "Wireless Speaker",
                        ram:"Without Mic",
                        image: "https://www.bhphotovideo.com/images/images2000x2000/jbl_jblxtremebluus_xtreme_portable_bluetooth_speaker_1182619.jpg"
                      },
                      {
                        id: 12,
                          title: "Boat",
                          content: "Wireless Earphones",
                          ram:"With Mic",
                          image: "https://rukminim1.flixcart.com/image/832/832/kmccosw0/headphone/p/z/b/airdopes-131-boat-original-imagf9n3mcafuhha.jpeg?q=70"
                        },
      ];

      const [search,setSearch]=useState('')

      const handleInputChange=(e)=>{setSearch(e.target.value)}

      const filterData=data.filter((searchValue)=>{
        const itemSearched=search.toLowerCase()
        return(searchValue.title.toLowerCase().includes(itemSearched) ||searchValue.id.toString().includes(itemSearched)||searchValue.content.toString().includes(itemSearched)||searchValue.ram.toLowerCase().includes(itemSearched))
      })
  return (
    <div className='div'>

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
    <h1>Electronics</h1>
    <input className='input2' placeholder='Search Here...' type='text' value={search} onChange={handleInputChange} />
    <div className='card1' >
     {filterData.map((item)=>(
      <div key={item.id} className='card2' >
      <img className='image' src={item.image} alt='' />
      <h4>{item.id}</h4>
      <h4>{item.title}</h4>
      <h4 className='features'>Features:</h4>
      <h5>{item.content}</h5>
      <h5>{item.ram}</h5>

      </div>
     ))}
      
    </div>
  </div>
  )
}

export default About
