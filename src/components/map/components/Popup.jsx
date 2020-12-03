import React from 'react';
import { Popup as PopupGL } from 'react-map-gl';
import './Popup.css';

export const Popup = ({ onClose, popupData }) => {
  return (
    <PopupGL
      latitude={popupData.latitude}
      longitude={popupData.longitude}
      onClose={onClose}
    >
      <div className="popup-container" onClose={onclick}>
        <div className="popup-person">
          <div className="popup-title">
            <h3>
              {popupData.name2.split(' ')[0]}, {popupData.age} let
            </h3>
          </div>
          <div className="popup-divider"></div>
          <div className="popup-description">
            <p>{popupData.description}</p>
          </div>
        </div>
        <div className="popup-mailto">
          <a
            href={`mailto:info@tiodvedle.cz?subject=${popupData.id}`}
            target="_blank"
          >
            Máte zájem pomoct? Kontaktujte nás na email info@tiodvedle.cz s
            předmětem ID: {popupData.id}.
          </a>
        </div>
      </div>
    </PopupGL>
  );
};
