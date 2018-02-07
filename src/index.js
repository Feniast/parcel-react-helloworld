import './css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';

const App = () => (
  <HelloWorld></HelloWorld>
);

const appRoot = document.getElementById('app');

ReactDOM.render(<App />, appRoot);