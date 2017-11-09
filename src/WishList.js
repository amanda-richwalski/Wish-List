import React, { Component } from 'react';
import wishItems from './WishItems';
import './WishList.css';

class wishList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if(this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="wishListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="item">
            </input>
            <input ref={(a) => this._inputElement = a}
              placeholder="description">
            </input>
            <input ref={(a) => this._inputElement = a}
              placeholder="link">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <wishItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
};

export default wishList;
