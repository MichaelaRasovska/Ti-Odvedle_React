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
      <div class="content">
        <section class="nav-menu">
          <header class="header">
            <a href="index.html">
              <img
                class="logo"
                src="./img/tiodvedle.jpg"
                alt="Logo Ti Odvedle"
              />
            </a>
            <div class="menu">
              <a class="menu__item" href="/pages/oprojektu.html">
                O projektu
              </a>
              <a class="menu__item" href="/pages/faqs.html">
                FAQs
              </a>
            </div>
          </header>
        </section>

        <div class="layout">
          <div class="layout__item layout__item--body">
            <h1 class="heading-h1">
              Propojujeme ty, co chtějí pomáhat, s těmi, co pomoc potřebují.
            </h1>
            <p class="p__first-paragraph">
              Pomocí, která nic nestojí, děláme Česko lepším místem pro život.
            </p>
            <div class="buttons__first-paragraph">
              <a class="button-main button__cta2" href="#how-to-help">
                Chci pomáhat
              </a>
              <a class="button-main button__cta" href="#full-bleed">
                Vím komu pomoci
              </a>
            </div>
          </div>

          <div class="layout__item layout__item--figure">
            <img
              class="imgMain imgMain__house"
              src="./img/house.svg"
              alt="obrázek lidí v domě navzájem si pomáhajících a povídajících"
            />
          </div>
        </div>

        <div class="layout">
          <div class="layout__item layout__item--body">
            <h2 class="heading-project">O projektu</h2>
            <p class="p__second-paragraph">
              Okolo nás žije spoustu lidí, co potřebují nějakou formu pomoci,
              ale o pomoc si sami neřeknou. My o nich ale často nevíme, protože
              trend dnešní doby je spíše starat se o své a nezajímat se o to,
              jak žijí ostatní. Často ale i malá, pro nás bezvýznamná pomoc,
              může pro někoho v okolí znamenat velmi mnoho. Může se přitom
              jednat jak o pomoc hmotnou, fyzickou, nebo i mentální. Darovat
              starší, ale funkční pračku mladé rodině, co má dětí hodně, ale
              peněz málo; potřeby na malování tomu, kdo si je sám nemůže
              dovolit; nevyužité záclony a jiné vybavení rodině v nouzi, nebo
              třeba pomoci s venčním pejska, nebo odvozem nábytku staré paní
              odvedle. To je komunitní projekt Ti Odvedle.
            </p>
          </div>

          <div class="layout__item layout__item--figure">
            <img
              class="imgMain imgMain__heart"
              src="./img/heart.svg"
              alt="obrázek dobrovolníků šířících dobro"
            />
          </div>
        </div>

        <div id="how-to-help" class="layout">
          <div class="layout__item layout__item--body">
            <h2 class="heading-help">Jak pomáhat?</h2>
            <p class="p__third-paragraph">
              Způsobů je mnoho. Stačí se podívat okolo sebe, jestli náhodou
              někdo ve vašem okolí něco nepotřebuje, něco mu neschází a pomoc mu
              nabídnout. Pokud nikoho takového nevidíte, koukněte na naši
              interaktivní mapu a ta vám třeba napoví, jestli okolo vás náhodou
              nežije někdo, kdo by vaši pomoc využil.
            </p>
            <div class="buttons__help">
              <a class="button-main button__cta2" href="#map-section">
                Přejít na mapu
              </a>
            </div>
          </div>
          <div class="layout__item layout__item--figure">
            <img
              class="imgMain imgMain__planet"
              src="./img/planet.svg"
              alt="dobrovolníci v oknech"
            />
          </div>
        </div>
      </div>
      <Notification
        text={notificationText}
        onNotificationClose={() => setNotificationText('')}
      />
      <section id="full-bleed" className="full-bleed">
        <h2 className="heading-form">Vím komu pomoci</h2>
        <p>
          Víte o někom, kdo potřebuje pomoct, ale neznáte nikoho, kdo je
          takouvou pomoc ochotný či schopný poskytnout? Mluvil/a jste s touto
          osobou a ta souhlasila s účastí v projektu Ti Odvedle? Super! V tom
          případě rovnou vyplňte náš formulář na vyžádání pomoci. Pokud nebude
          cokoliv jasné, projděte si naše FAQs, kde se dozvíte, jak se s lidmi o
          pomoci bavit i čeho se vyvarovat. Najdete zde i tipy, konkrétní
          příklady pomoci a také odpovědi na téma týkající se GDPR. Pojďme
          společně dělat Česko lepším místem pro život!
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
        <div class="footer">
          <a
            class="footer__item-saying"
            href="https://www.linkedin.com/in/krist%C3%BDna-nedv%C4%9Bdov%C3%A1-9292b0a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design by Kristýna Nedvědová
          </a>
          <a class="footer__item-copyright">Copyright ©2020 TiOdvedle.cz</a>
          <a
            class="footer__item-illustrations"
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
