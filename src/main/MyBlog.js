import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MyBlog.css';

const MyBlog = () => {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);  
  const [editPost, setEditPost] = useState({ title: '', content: '', id: '' });  

  useEffect(() => {
    axios
      .get('http://localhost:4000/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/posts/delete/${postId}`);
      alert(response.data.message);  
      setPosts(posts.filter((post) => post._id !== postId));  
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  const handleEdit = (post) => {
    setIsEditing(true);
    setEditPost({ title: post.title, content: post.content, id: post._id });
  };

  const handleUpdate = async () => {
    try {
      const { title, content, id } = editPost;
      if (!title || !content) {
        return alert('Title and content are required');
      }

      const response = await axios.put(`http://localhost:4000/posts/update/${id}`, { title, content });
      alert(response.data.message); 
      setPosts(
        posts.map((post) =>
          post._id === id ? { ...post, title, content } : post
        )
      ); 
      setIsEditing(false);  
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post');
    }
  };

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
                <button onClick={() => handleDelete(post._id)} className="delete-button">
                  Delete
                </button>
                <button id="update" onClick={() => handleEdit(post)} className="update-button">
                  Update
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {isEditing && (
        <div className="edit-form">
          <h3>Edit Blog</h3>
          <input
            type="text"
            placeholder="Title"
            value={editPost.title}
            onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
          />
          <textarea
            placeholder="Content"
            value={editPost.content}
            onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
          />
          <button id='update' onClick={handleUpdate} className="update-button">
            Update Post
          </button>
          <button id='update' onClick={() => setIsEditing(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBlog;
