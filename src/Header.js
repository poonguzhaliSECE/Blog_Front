import React from 'react';
import './css/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id='body'>
    <div className='headpage'>
      <div className='head'>
        <h3>My Blog</h3>
      </div>
      <div className='head-ele'>
        <ul>
        <li><button class="index" onClick={() => navigate('/login')}>Login</button></li>
          <li><button class="index" onClick={() => navigate('/register')}>Sign Up</button></li>
          <li><button  class="index"onClick={() => navigate('/contact')}>Contact</button></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Header;
