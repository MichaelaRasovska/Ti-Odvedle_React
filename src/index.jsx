import React from 'react';
import { render } from 'react-dom';
import { Catalogue } from './components/catalogue/index.jsx';
import { Form } from './components/form/index.jsx';
import { Map } from './components/map/index.jsx';
import './index.html';

const App = () => {
  return (
    <>
      <Form />
      <p className="map__item">
        Objevte naší interaktivní mapu a podívejte se kdo ve vašem okolí zrovna
        potřebuje pomoc:
      </p>
      <Map />
    </>
  );
};

render(<App />, document.querySelector('#app'));
