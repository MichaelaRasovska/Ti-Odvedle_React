import React from 'react';
import { Popup as PopupGL } from 'react-map-gl';
import './Popup.css';

export const Popup = ({
  latitude,
  longitude,
  closeOnClick,
  onClose,
  age,
  name2,
  description,
  id,
  onClick,
}) => {
  return (
    <PopupGL
      latitude={latitude}
      longitude={longitude}
      closeOnClick={closeOnClick}
      onClose={onClose}
    >
      <div onClick={onClick}>
        <h3>
          {name2.split(' ')[0]}, {age} let
        </h3>
        <p>{description}</p>
        <div className="mailto">
          <a href={`mailto:info@tiodvedle.cz?subject=${id}`} target="_blank">
            Máte zájem pomoct? Kontaktujte nás na email info@tiodvedle.cz s
            předmětem ID: {id}.
          </a>
        </div>
      </div>
    </PopupGL>
  );
};
