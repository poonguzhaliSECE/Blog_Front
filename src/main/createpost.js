import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import {useNavigate } from "react-router-dom";
import '../css/CreatePost.css';
import H from '../H';


const CreatePost = ({ postId }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { userInfo } = useContext(UserContext); 
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(`http://localhost:4000/posts/${postId}`);
                    const post = response.data;
                    setTitle(post.title);
                    setContent(post.content);
                } catch (error) {
                    console.error('Error fetching post for editing:', error);
                }
            };
            fetchPost();
        }
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            title,
            content,
            author: userInfo.username,
        };

        try {
            if (postId) {
                
                const response = await axios.put(`http://localhost:4000/posts/update/${postId}`, postData);
                setMessage(response.data.message); 
            } else {
                
                const response = await axios.post('http://localhost:4000/createpost', postData);
                setMessage(response.data.message); 
                setTimeout(() => navigate('/Home'), 2000);
            }
        } catch (error) {
            console.error('Error saving post:', error);
            setMessage('Error saving post');
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/posts/delete/${postId}`);
            setMessage(response.data.message); 
        } catch (error) {
            console.error('Error deleting post:', error);
            setMessage('Error deleting post');
        }
    };

    return (
        <div>
        <H/>
        <div className={`create-post-container ${!postId ? 'create-post' : 'edit-post'}`}>
           
            <h2>{postId ? 'Edit Your Post' : 'Create Your Post'}</h2>
            <form className="create-post-form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Content</label>
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">{postId ? 'Update' : 'Submit'}</button>

                {postId && (
                    <div>
                        <button className="delete-button" onClick={handleDelete}>Delete Post</button>
                    </div>
                )}
            </form>

            {message && <div className="message">{message}</div>}
        </div>
        </div>
    );
};

export default CreatePost;
