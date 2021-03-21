import React from 'react';
import { useEffect, useState } from 'react';
import Fakedata from '../Data/data.json'
import Home from '../Home/Home'
import background from '../images/Bg.png'
// import logo from '../images/u.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [vehicle, setVehicle] = useState([])

  useEffect(() => {
    setVehicle(Fakedata)
    console.log(Fakedata)
  //  const id =1

  }, [])
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='header'>
      <div className='d-flex'>
        <div className='lg col-md-5'>
          <h2>City Riders</h2>
          {/* <img src={logo} alt="" /> */}
        </div>
        <div className='col-md-7'>
          <nav>
            <Link to="/Header">Home</Link>
            <Link to= "/booking/${id}">Destination</Link>
            <Link to="/Inventory">Blog</Link>
            <Link to="/Inventory">Contract</Link>
            <Link to="/login">login</Link>
          </nav>
        </div>

      </div>




      <div className="row">
        <ul>
          {
            vehicle.map(vehicles => <Home vehicles={vehicles} key={vehicle.id} ></Home>)
           
          }
        </ul>

       

      </div>

    </div>
  );
};

export default Header;