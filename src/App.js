import React, { useEffect } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logout, selectUser, login } from './features/appSlice';
import { auth } from './firebase';

function App() {
  useEffect(() =>{
auth.onAuthStateChanged((authUser) => {
  if(authUser){
    dispatch(login({
      username: authUser.displayName,
      profilePic: authUser.photoURL,
      id: authUser.uid,
    }))
  }else{
    dispatch(logout())
  }
})
  },[])
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  return (
    <div className="app">
    <Router>
      {!user ? <Login /> :
      <>
     <img className='app__logo' src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
         <div className='app__body'>
          <div className='appBody__background'>
         <Switch>
         <Route path="/chats/view">
         <ChatView/>
         </Route>
         <Route path="/chats">
         <Chats/>
         </Route>
         <Route path="/preview">
         <Preview/>
         </Route>
           <Route exact path="/">
             <WebcamCapture/>
           </Route>
         
         </Switch>
       </div>
       </div>
       </>
      }
   
    </Router>

    </div>
  );
}

export default App;
