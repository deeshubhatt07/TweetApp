import React, { useState } from 'react';
import Header from '../Component/Header';
import './View.css';
import Postbox from '../Component/TweetComponents/Postbox';
import UserTweets from '../Component/TweetComponents/UserTweets';
import ImageUser from '../Pics/img.png';

const tweets = [
  { text: "Hello, world!", handleName: "johndoe", image: "https://www.w3schools.com/images/w3schools_green.jpg", timestamp: new Date().getTime() - 1674582015435 },
  { text: "React is cool!", handleName: "janedoe", image: "https://www.w3schools.com/images/w3schools_green.jpg", timestamp: new Date().getTime() - 1674582015435 },
  { text: "I'm learning to code!", handleName: "jimmy", image: "https://www.w3schools.com/images/w3schools_green.jpg", timestamp: new Date().getTime() - 1674582015435 },
  { text: "AI is the new model", handleName: "Daniel", image: "https://www.w3schools.com/images/w3schools_green.jpg", timestamp: new Date().getTime() - 1674582015435 },
];

export const Tweets = () => {
  const [previewUrl, setPreviewUrl] = useState(ImageUser);

  const handleChange = (event) => {
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='bg-light' style={{ "background-color": 'rgb(252, 253, 254)' }}>
      <Header />
      <div className="AllTweets d-flex">
        <div className='image-box'>
          <img src={previewUrl} alt='preview' className='image-props' />
          <input type='file' onChange={handleChange} />
        </div>
        <div className="container">
          <Postbox />
          {tweets.map((tweet, index) => {
            return <UserTweets key={index} data={tweet} />
          })}
        </div>
      </div>
    </div>
  );
}
