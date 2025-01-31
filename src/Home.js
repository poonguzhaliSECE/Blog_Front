import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import axios from 'axios';


const Home = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      
      axios.get('http://localhost:4000/posts')
          .then(response => setPosts(response.data))
          .catch(error => console.error('Error fetching posts:', error));
  }, []);

  

  return (
    <div id='body'>
    <div className='headerpage'>
      <div className='head'>
        <h3>My Blog</h3>
      </div>
      <div className='head-element'>
        <ul>
        <li><button className="index1" onClick={() => navigate('/ownblogs')}>OwnBlogs</button></li>
        <li><button className="index1" onClick={() =>navigate('/myblog')}>MyBlog</button></li>
        <li><button className="index1" onClick={() => navigate('/createpost')}>create post</button></li>
        <li><button className="index1" onClick={() => navigate('/subscribe')}>subscribe</button></li>
        <li><button className="index1"onClick={() => navigate('/profile')}>profile</button></li>
        </ul>
      </div>
    </div>
<pre id='you'> You May.....
                 Create Your own Blogs</pre> 
    <img id='mainimg'src="https://i.pinimg.com/474x/53/3f/aa/533faa6584279a5fe5d0e330a41d2e5c.jpg" alt='img loading'></img>
    <div className="posts-container">
    <h2>Recent Posts</h2>
    {posts.length === 0 ? (
        <p>No posts available</p>
    ) : (
        <div className="posts-grid">
            {posts.map((post) => (  
                <div key={post._id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )}
</div>

    </div>
  )
}

export default Home
