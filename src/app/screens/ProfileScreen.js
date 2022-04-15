import React from 'react';
import './ProfileScreen.css';
import Nav from '../components/Nav';
import { selectUser } from './../../features/userSlice';
import { useSelector } from 'react-redux';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className="profileScreen_info">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="profileScreen_detail">
              <h2>{user.email}</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen
