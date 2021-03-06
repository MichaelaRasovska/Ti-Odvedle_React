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
      <Notification
        text={notificationText}
        onNotificationClose={() => setNotificationText('')}
      />
      <section id="full-bleed" className="full-bleed">
        <h2 className="heading-form">Vím komu pomoci</h2>
        <p>
          Víte o někom, kdo potřebuje pomoct, ale neznáte nikoho, kdo je takovou
          pomoc ochotný či schopný poskytnout? Mluvil/a jste s touto osobou a ta
          souhlasila s účastí v projektu Ti Odvedle? Super! V tom případě rovnou
          vyplňte náš formulář na vyžádání pomoci. Pokud nebude cokoliv jasné,
          projděte si naše FAQs, kde se dozvíte, jak se s lidmi o pomoci bavit i
          čeho se vyvarovat. Najdete zde i tipy, konkrétní příklady pomoci a
          také odpovědi na téma týkající se GDPR. Pojďme společně dělat Česko
          lepším místem pro život!
        </p>
        <button
          id="sign"
          className="button-main button__cta"
          onClick={toggleModal}
        >
          Vyžádat pomoc
        </button>
        {isModalOpen && <Form onFormClose={onFormClose} />}
      </section>
      <Map />
      <footer>
        <div className="footer">
          <a
            className="footer__item-saying"
            href="https://www.linkedin.com/in/krist%C3%BDna-nedv%C4%9Bdov%C3%A1-9292b0a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design by Kristýna Nedvědová
          </a>
          <a className="footer__item-copyright">Copyright ©2020 TiOdvedle.cz</a>
          <a
            className="footer__item-illustrations"
            href="http://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Illustrations by pch.vector
          </a>
        </div>
      </footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
