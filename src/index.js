import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WishList from './WishList';

var destination = document.querySelector("#container")

ReactDOM.render(
  <div id="container">
    <WishList/>
  </div>,
  destination
);
