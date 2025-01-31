import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import axios from 'axios';
 

const H = () => {

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
        <li><button className="index1" onClick={() =>navigate('/myblog')}>MyBlog</button></li>
        <li><button className="index1" onClick={() => navigate('/createpost')}>create post</button></li>
        <li><button className="index1" onClick={() => navigate('/subscribe')}>subscribe</button></li>
        {/* <li><button className="index1"onClick={() => navigate('/profile')}>profile</button></li> */}
        </ul>
      </div>
    </div>
    </div>
  )};
  export default H;