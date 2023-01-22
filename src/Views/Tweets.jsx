import React from 'react';
import Header from '../Component/Header'
import TweetsList from '../Component/TweetsList';

const tweets = [
  { text: "Hello, world!", username: "johndoe" },
  { text: "React is cool!", username: "janedoe" },
  { text: "I'm learning to code!", username: "jimmy" },
];

export const Tweets = () => {
  return (
    <div>
        <Header />
      {tweets.map((tweet, index) => {
        return <TweetsList key={index} text={tweet.text} username={tweet.username} />
      })}
    </div>
  );
}
