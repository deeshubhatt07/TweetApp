import React, {useState} from 'react';
import './Tweetcomponent.css';
const UserTweets = (props) => {
  return (
    <div className="tweet-container">
      <div className="tweet-top">
        <img className="tweet-avatar" src={props.data.image} alt="Avatar"></img>
        <div className="user-details">
          <p className="tweet-username">{props.data.handleName}</p>
          <p className="tweet-timestamp">{props.data.timestamp}</p>
        </div>
      </div>
      <div className="tweet-text">
        <p>{props.data.text}</p>
      </div>
    </div>
  );
}

export default UserTweets;
