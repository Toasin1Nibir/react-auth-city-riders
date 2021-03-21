// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
    
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/form">
            <Form></Form>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:id">
            <Booking/>
          </Route >
        
          <Route exact path="/">
            <Header />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;





















// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
