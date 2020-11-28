import React from 'react';
import './Notification.css';

export const Notification = ({ text }) => {
  if (text) {
    return (
      <div id="snackbar" className="show">
        {text}
      </div>
    );
  }
};
