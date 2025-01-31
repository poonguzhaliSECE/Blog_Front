import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext'; // Import the context to get logged-in user info

const OwnBlog = () => {
    const [posts, setPosts] = useState([]);
    const { userInfo } = useContext(UserContext); // Access the logged-in user's info

    useEffect(() => {
        // Only fetch posts created by the logged-in user based on username
        if (userInfo && userInfo.username) {  // Ensure user is logged in
            axios.get(`https://blog-front-eosin.vercel.app/posts?username=${userInfo.username}`)
                .then(response => setPosts(response.data))
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [userInfo]); // Run the effect when userInfo changes (e.g., when logged in)

    return (
        <div id="body">
            <div className="headerpage">
                <div className="head">
                    <h3>My Blog</h3>
                </div>
            </div>
            <div className="posts-container">
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
    );
};

export default OwnBlog;
