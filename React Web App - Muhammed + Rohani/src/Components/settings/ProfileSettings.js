import React from 'react';
import './styles/ProfileSettings.css'; 

const ProfileSettings = () => {
  return (
    <div className="settings-page">
      {/* Header Section */}
      <header className="settings-header">
        <div className="menu-icon">
          <i className="fa fa-bars"></i>
        </div>
        <img src="/path/to/logo.png" alt="SRV Logo" className="logo" />
        <div className="header-right">
          <i className="notification-icon fa fa-bell"></i>
          <div className="user-info">
            <img src="/path/to/user-avatar.jpg" alt="User Avatar" className="user-avatar" />
            <span className="user-name">John Doe</span>
          </div>
        </div>
      </header>

      {/* Tabs for Settings */}
      <div className="tabs">
        <button className="tab-button active">Settings</button>
        <button className="tab-button">Notification</button>
        <button className="tab-button">Privacy</button>
      </div>

      {/* Main Content */}
      <div className="settings-content">
        <div className="profile-section">
          <ProfileInfo />
        </div>

        {/* Basic Info Form */}
        <div className="basic-info-section">
          <BasicInfoForm />
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-avatar">
        <div className="avatar-circle">
          
        </div>
      </div>
      <h2>John Doe</h2>
      <p>Melbourne, Australia</p>
      <div className="stats">
        <div>
          <strong>21</strong> Feedbacks
        </div>
        <div>
          <strong>6</strong> Current Clients
        </div>
      </div>
      <button className="upload-avatar-btn">Upload new avatar</button>
    </div>
  );
};

const BasicInfoForm = () => {
  return (
    <div className="basic-info-form">
      <h3>Basic Info</h3>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input type="text" placeholder="Title" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label>About Me</label>
          <textarea placeholder="Tell us about yourself"></textarea>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
