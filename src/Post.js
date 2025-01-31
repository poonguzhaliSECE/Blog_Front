import React from 'react'
import './css/Post.css'
import Footer from'./footer';

const Post = () => {
  return (
    <div>
      <img id ="img" src=" https://i.pinimg.com/736x/b2/bf/e0/b2bfe04fe4ab4c92df96b2fd4fec6832.jpg" alt="img loading"></img>
      <h2 id='name'>POOVA'S Blog</h2>
      <p id="sub">To know more knowledge & connect!</p>
  
      <Footer/>
    </div>
  )
}

export default Post