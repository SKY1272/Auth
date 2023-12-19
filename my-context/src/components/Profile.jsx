// Logout.jsx
// Profile.jsx

// ProfilePage.js
import React from 'react';

const Profile = ({ logout }) => {
  return (
    <div className="container profile">
      <h1>Welcome to your profile</h1>
      {/* Your profile information goes here */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;

