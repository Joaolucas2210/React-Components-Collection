import React from 'react';
import {comments} from './commentData'
import Card from './Card.js'

export default function App(props){
  return (
    <div>
      {comments.map(comment => 
        <Card commentObject={comment}></Card>
      )}
    </div> 
)}