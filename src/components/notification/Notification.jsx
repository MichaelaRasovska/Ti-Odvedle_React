import React, { useEffect } from 'react';
import './Notification.css';

export const Notification = ({ text, onNotificationClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNotificationClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [text]);

  if (text) {
    return (
      <div id="snackbar" className="show" onClick={onNotificationClose}>
        {text}
      </div>
    );
  }
  return null;
};
