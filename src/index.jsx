import React, { useState } from 'react';
import { render } from 'react-dom';
import { Form } from './components/form/Form.jsx';
import { Map } from './components/map/Map.jsx';
import './index.html';
import { Notification } from './components/notification/Notification.jsx';

const App = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const onFormClose = (showNotification) => {
    setModalIsOpen(!isModalOpen);
    if (showNotification === true) {
      setNotificationText('Děkujeme! Váš formulář byl odeslán.');
    }
  };

  return (
    <>
      <Notification text={notificationText} />
      <div id="full-bleed" className="full-bleed">
        <h2 className="heading-form">Vím komu pomoci</h2>
        <p>
          Vítě o někom kdo potřebuje pomoc? Skvěle! Rovnou je přihlašte. Pokud
          si nebudete čímkoliv jistí projděte si naše FAQ - kde se dozvíte, jak
          se s lidmi o pomoci bavit i čeho se vyvarovat. Najdete zde i tipy,
          konkrétní příklady a jakékoliv nejasnosti ohledně GDPR. Pojdme
          společně dělat Česko lepším místem pro život!
        </p>
        <button id="sign" className="button-main" onClick={toggleModal}>
          Přihlásit
        </button>
      </div>
      {isModalOpen && <Form onFormClose={onFormClose} />}
      <p id="map-item" className="map__item">
        Objevte naší interaktivní mapu a podívejte se kdo ve vašem okolí zrovna
        potřebuje pomoc:
      </p>
      <Map />
    </>
  );
};

render(<App />, document.querySelector('#app'));
