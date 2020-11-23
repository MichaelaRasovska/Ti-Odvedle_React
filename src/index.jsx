import React from 'react';
import { render } from 'react-dom';
import { Catalogue } from './components/catalogue/index.jsx';
import { Form } from './components/form/index.jsx';
import { Map } from './components/map/index.jsx'
import './index.html';

const App = () => {
  return (
    <>
      {/* tady bude mapa */}
      <Catalogue />
      <Form />
      <Map />
    </>
  );
};

render(<App />, document.querySelector('#app'));
