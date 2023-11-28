import React, { useEffect } from 'react'
import './Chats.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState } from 'react';
import Chat from './Chat';
import { auth, db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { resetCameraImage } from './features/cameraSlice';
const Chats = () => {
    const [posts,setPosts]= useState([]);
    const dispatch = useDispatch();
const history = useHistory();
    const takeSnap = () =>{
        dispatch(resetCameraImage)
history.push('/')
    }
const user = useSelector(selectUser);
    useEffect(() =>{
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
            id:doc.id,
            data:doc.data(),
        }))
        )
        )
    }, [])
  return (
    <div className='chats'>
        <div className='chats__header'>
            <Avatar src={user.profilePic} onClick={()=>{
                auth.signOut()
            }}className='chats__avatar'/>
            <div className='chats__search'>
                <SearchIcon className='chats__searchIcon'/>
                <input placeholder='Friends' type='text'/>

            </div>
            <ChatBubbleIcon className='chats__chatIcon' />
        </div>
        <div className='chats__posts'>
{posts.map(({id, data:{profilePic, username, timestamp, imageUrl, read},
}) => (
    <Chat
     key={id} 
     id={id} 
     username={username} 
     timestamp={timestamp} 
     imageUrl={imageUrl} 
     read={read} 
     profilePic={profilePic} />
     )
)}
        </div>
        <RadioButtonCheckedIcon  className='chats__takePicIcon' onClick={takeSnap} fontSize='large'/>
    </div>
  )
}

export default Chats