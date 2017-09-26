import React from 'react';
import ReactDOM from 'react-dom';
import NetflixContainer from './containers/netflixContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <NetflixContainer />,
    document.getElementById('app')
  );
};
