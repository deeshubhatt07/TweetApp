import React,{useState} from 'react'
import './Tweetcomponent.css'
const Postbox = () => {
  const [postContent,setPostContent] = useState('')
  return (
    <div>
      <div className="post-tweet-box">
          <textarea 
           name="postContent"
           className='messageBox'
           rows={7}
           cols={40}
           value={postContent}
           onChange={e=>setPostContent(e.target.value)} />
        <button type='submit' className="submit-post primary-btn">Tweet</button>
      </div>
    </div>
  )
}
export default Postbox
