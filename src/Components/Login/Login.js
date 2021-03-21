import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import background from '../images/Bg.png'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
function Login() {
  const [ newUser , setnewUser] = useState(false)
  const [user , setUser] = useState({
    isSignedin : false,
    name :'',
    photo:'',
    email:'',
    password:''
  })

  var provider = new firebase.auth.GoogleAuthProvider();
  var fbprovider = new firebase.auth.FacebookAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory() 
  const {id} =useParams()
  const url = `/booking/${id}`
  const handleSignIn =()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const { displayName ,photoURL ,email} = res.user;
      const signedInuser = {
        isSignedin : true,
        name :displayName,
        photo:photoURL,
        email:email
      }
      setUser(signedInuser)
      console.log(displayName ,photoURL ,email)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  // const handleSignOut =()=>{
  //   firebase.auth().signOut()
  //   .then(res => {
  //     const signedOutuser = {
  //       isSignedin : false,
  //       name :'',
  //       photo:'',
  //       email:'',
  //       error:'',
  //       success: false
  //     }
  //     setUser(signedOutuser)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }
  const handleFbSignin=()=>{
    firebase.auth().signInWithPopup(fbprovider)
  // .then((result) => {
  //   /** @type {firebase.auth.OAuthCredential} */
  //   var user = result.user;
  //  console.log('fb after',user)

  //   // ...
  // })
  .then(res => {
    // const { displayName ,photoURL ,email} = res.user;
    const signedInuser = {
      isSignedin : true
    
    }
    setUser(signedInuser)
    
  })
 
  .catch((error) => {
  });
  }

  const handleChange =(e) =>{
    let isFormValid = true
    // console.log(e.target.name, e.target.value)
    if(e.target.name === 'email')
    {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if(e.target.name === 'password'){
      const isPassword = e.target.name.length > 6
      const passwordFormat = /\d{1}/.test(e.target.value)
      isFormValid = isPassword && passwordFormat
    }
    if(isFormValid)
    {
      const newUserInfo = {...user}
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit =(e)=>{
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email ,user.password)
      .then(res => {
      const newUserInfo = {...user}
      newUserInfo.error = ''
      newUserInfo.success = true
      setUser(newUserInfo)
     
      // updateUserName(user.name)
      })
      .catch(error => {
      const newUserInfo = {...user}
      newUserInfo.error = error.message
      newUserInfo.success = false
      setUser(newUserInfo)
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email ,user.password)
      .then(res => {
      const newUserInfo = {...user}
      newUserInfo.error = ''
      newUserInfo.success = true
      setLoggedInUser(newUserInfo)
      setUser(newUserInfo)
      const signedInuser = {
        isSignedin : true
      
      }
      setUser(signedInuser)
      console.log('sign in user info',res.user)
      })
      .catch(error => {
      const newUserInfo = {...user}
      newUserInfo.error = error.message
      newUserInfo.success = false
      setUser(newUserInfo)
      });
    }
    e.preventDefault()
  }
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='header'>
    <div style={{textAlign:'center'}}>
      
      {/* {
        user.isSignedin ? <button onClick={handleSignOut}>sign out</button> : <button onClick={handleSignIn}>sign in</button>
      } */}
     
     

{/*       
      <input type="checkbox" onChange={()=>setnewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label> */}
      

      <form onSubmit={handleSubmit}>
    
      {newUser ? <h1>Create an account</h1>:<h1>Login</h1> }
     {newUser && <input type="text" name="name" onBlur={handleChange} placeholder="Name"/>}
      <br/>
      <input type="text" name="email" onBlur={handleChange} placeholder={newUser ? 'Username or Email' : 'Email'} required/>
      <br/>
      <input type="password" name="password" id="" onBlur={handleChange} placeholder='Password' required/>
      <br/>
      {newUser && <input type="password" name="Confirm_password" id="" onBlur={handleChange} placeholder='Confirm password' required/>}
      <br/>
      {/* <button type="button" class="btn btn-warning" >{newUser ? 'Create an account' : 'Login'}</button> */}
      <input type="submit" value={newUser ? 'Create an account' : 'Login'}/>
      <br/>
      <input type="checkbox" onChange={()=>setnewUser(!newUser)} name="newUser" id=""/>
      {newUser ?  <label htmlFor="newUser">Already have an account  <Link to="/login">Login</Link> </label> 
      :<label htmlFor="newUser">Dont have an account <Link to="/login">Create an account</Link></label>}
    
    
      </form>


     
      <p style={{color: 'red'}}>{user.error} </p>
      {user.success && <p style={{color: 'green'}}> {newUser ? 'Created ' : 'logged in'} Suceessful </p>}
      
     
      <p>-------------or-----------</p>
      <button onClick={handleFbSignin}><i class="fa fa-facebook-official" aria-hidden="true"></i> Continue with Facebook</button>
      {
        user.isSignedin ?  <Redirect to="/booking/" />  
      :<Redirect to="/login/" />  
      }
      <br/>
      <button onClick={handleSignIn}><i class="fa fa-google" aria-hidden="true"></i> Continue with Google</button>
    </div>

    </div>
  );
}




export default Login;
