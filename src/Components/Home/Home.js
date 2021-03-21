import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'


const Home = (props) => {
   
    const{name , image,id}  = props.vehicles
    const imgStyle = {height: '120px'}
    const history = useHistory()

    const handleClick =(id)=>{
        const url = `/booking/${id}`
        history.push(url)
    }
    // const handleClick =(id)=>{
    //     const url = `/login/${id}`
    //     history.push(url)
    // }
    return (

// {/* <div className='col-md-4 car'>
//               <img  onClick={() => handleClick(id)} style={imgStyle} src={image} alt=""/>  
//           <div>
//               <h5>{name}</h5>
//               {/* <button onClick={() => handleClick(id)}>Go</button> */}
//           </div>
            
             
//         </div> */}

<div className="card text-center car ">
<div >
<img  onClick={() => handleClick(id)} style={imgStyle} src={image} alt=""/>  
<div class="card-body">
<h5>{name}</h5>
   
</div>
</div>
</div>  
       
      
       
    
   
    //     <div class="card col-md-2">
    //     <img style={imgStyle} src={image} alt=""/>
    //     <div class="card-body">
    //        <h5>Name is: {name}</h5>
    //     </div>
    //   </div>
 
 


       
    );
};

export default Home;