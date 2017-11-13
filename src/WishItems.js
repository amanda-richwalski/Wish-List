import React, { Component } from 'react';

var destination = document.querySelector("container");

class WishItems extends React.Component {

  render() {
    var wishEntries = this.props.entries;
    var wishItems = [];

    for (var i = 0; i < wishEntries.length; i++) {
      var entry = wishEntries[i];
      wishItems.push(<li key={"item" + i}>
        <a href={entry.link}>{entry.item}</a>: {entry.description}</li>);
    }

    return (
      <ul className="theWish">
        {wishItems}
      </ul>
    );
  }
};

export default WishItems;
