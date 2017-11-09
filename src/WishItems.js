import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class wishItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={(e) => this.delete(item.key, e)}
              key={item.key}>{item.text}</li>
  }

  render() {
    var wishEntries = this.props.entries;
    var wishItems = wishEntries.map(this.createTasks);

    return (
      <ul className="thewish">
        <FlipMove duration={250} easing="ease-out">
          {wishItems}
        </FlipMove>
      </ul>
    );
  }
};

export default wishItems;
