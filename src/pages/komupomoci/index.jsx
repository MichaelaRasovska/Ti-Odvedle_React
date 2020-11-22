import React from 'react';
import { render } from 'react-dom';
import { Form } from '../../components/form/index.jsx';
import './index.html';
import '../../style.css';

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

render(<App />, document.querySelector('#app'));
