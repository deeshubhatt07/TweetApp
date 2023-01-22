import React from 'react';

const TweetsList = (props) => {
  return (
    <div>
      <h2>{props.text} </h2> -
      <p>{props.username}</p>
    </div>
  );
}

export default TweetsList;
