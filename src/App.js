import React  from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from './actions/'

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import NewTask from './components/NewTask'


function App() {
  let user = useSelector(state => state.user)
  let dispatch = useDispatch()
  return (
    <Router>
      <div className="App">
        {user ? ( <button className=" btn btn-outline-secondary float-right m-3" onClick={()=>dispatch(signOut())} >Signout</button>) : null}
        <br></br>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/newTask" exact component={NewTask}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
