import React, { useState } from 'react';
import { render } from 'react-dom';
import { Form } from './components/form/Form.jsx';
import { Map } from './components/map/Map.jsx';
import './index.html';
import { Notification } from './components/notification/Notification.jsx';

const App = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <>
      <Notification text="Děkujeme! Váš formulář byl odeslán." />
      <div className="full-bleed">
        <h2>Vím komu pomoci</h2>
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
      {isModalOpen && <Form onRequestClose={toggleModal} />}
      <p className="map__item">
        Objevte naší interaktivní mapu a podívejte se kdo ve vašem okolí zrovna
        potřebuje pomoc:
      </p>
      <Map />
    </>
  );
};

render(<App />, document.querySelector('#app'));
