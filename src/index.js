import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import WishList from './WishList';

var destination = document.querySelector("#container")

ReactDom.render(
  <div>
    <WishList/>
  </div>,
  destination
);
