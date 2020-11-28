import React from 'react';
import './Notification.css';

export const Notification = ({ text, onNotificationClose }) => {
  if (text) {
    return (
      <div id="snackbar" className="show" onClick={onNotificationClose}>
        {text}
      </div>
    );
  }
  return null;
};
