import React from 'react';
import logo from '../images/u.png';
import { useState } from 'react';
import Fakedata from '../Data/data.json'
import { Link, useParams } from 'react-router-dom';
import background from '../images/Bg.png'
import './Booking.css'

const Booking = (props) => {
     const {id} =useParams()
     console.log('after',id)
    //  const[book , setBook] = useState({})
     const match = Fakedata.find(pd => pd.id == id) 
    
    
  
    

    const [user , setUser] = useState(false)
    let show;
    if(user){
        show = 
        <div >
        <div className="d-flex show" >
            <img  style={{height:'40px'}} src={match.image} alt=""/> 
            <h2>{match.name}</h2>
            <h4>{match.cost}</h4>
        </div>
        <div className="d-flex show" >
            <img  style={{height:'40px'}} src={match.image} alt=""/> 
            <h2>{match.name}</h2>
            <h4>{match.cost}</h4>
        </div>
        <div className="d-flex show" >
            <img  style={{height:'40px'}} src={match.image} alt=""/> 
            <h2>{match.name}</h2>
            <h4>{match.cost}</h4>
        </div>
        </div>
       
        
    }
   
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='header'>
        <div>
            <div className='d-flex'>
                <div className='lg col-md-5'>
                    <img src={logo} alt="" />
                </div>
                <div className='col-md-7'>
                    <nav>
                        <Link to="/Header">Home</Link>
                        <Link to="/booking">Destination</Link>
                        <Link to="">Blog</Link>
                        <Link to="">Contract</Link>
                        <button type="button" class="btn btn-warning">Login</button>
                    </nav>
                </div>

            </div>
           <div className='d-flex'>
          
            <div className='col-md-3 lower_part '>
         <form className='formm'action="">
             <label htmlFor=""><h4>Pick From</h4></label>
             <br/>
             <input type="text" name="pick_from" placeholder='' required />
             <br />
             <label htmlFor=""><h4>Pick To</h4></label>
             <br/>
             <input type="text" name="pick_to" id=""  placeholder='' required />
             <br />
             <button onClick={()=>setUser(!user)} type="button" class="btn btn-danger">Search</button>
         </form>
           {show}

         
        
         <div>
           
         </div>
         </div>
         <div className="col-md-9">
         <div class="mapouter"><div class="gmap_canvas"><iframe width="900" height="600" id="gmap_canvas" src="https://maps.google.com/maps?ll=28.5449756,77.1904397&q=Indian Institute of Technology Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>undefined<a href="undefined">undefined</a>undefined</div><style>.mapouter{}.gmap_canvas {}</style></div>
         </div>
        
         </div>

        

        </div>
        </div>
       
         
    );
};

export default Booking;