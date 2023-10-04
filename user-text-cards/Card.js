import React from 'react';
import Body from './Body.js'; 
import Header from './Header.js';

export default function Card(props){
  return(
    <div>
    <Header username={props.commentObject.username} profileImg={props.commentObject.profileImg}></Header>, 
    <Body comment={props.commentObject.comment}></Body>
    </div>)
}