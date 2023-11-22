import React from 'react'
import './Chats.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState } from 'react';
const Chats = () => {
    const [posts,setPosts]= useState([])
  return (
    <div className='chats'>
        <div className='chats__header'>
            <Avatar className='chats__avatar'/>
            <div className='chats__search'>
                <SearchIcon />
                <input placeholder='Friends' type='text'/>

            </div>
            <ChatBubbleIcon className='chats__chatIcon' />
        </div>
        <div className='chats__posts'>
<h1>hello</h1>
        </div>
    </div>
  )
}

export default Chats