import React from 'react'
import './Chat.css'
import { Avatar } from '@mui/material'
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import ReactTimeago from 'react-timeago';
import { useDispatch } from 'react-redux';
import { selectImage } from './features/appSlice';
import { useHistory } from 'react-router-dom';
import { db } from './firebase';
const Chat = ({id, profilePic, username, timestamp, imageUrl, read}) => {
    const dispatch = useDispatch();
    const history= useHistory();
const open = () => {
if(!read){
    dispatch(selectImage(imageUrl))
    db.collection('posts').doc(id).set({
        read:true,
    }, {merge:true}
    );
    history.push('./chats/view')
};

}
  return (
    <div onClick={open} className='chat'>
<Avatar className='chat__avatar' src={profilePic} />
<div className='chat__info'>
<h4>{username}</h4>
<p>
  {!read && 'Tap to view'}{' '}
   Tap to view -<ReactTimeago date={new Date (timestamp?.toDate().toUTCString())} /></p>
</div>
{!read && <StopRoundedIcon className='chat__readIcon' />} 
    </div>
  )
}

export default Chat