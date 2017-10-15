import React, { Component } from 'react';

class Item extends Component {
  renderTableRow() {
    return this.props.scheme.map(key => {
      return(<td key={key}>{ this.props.data[key] }</td>)
    })
  }
  render() {
    return (
      <tr>
        {this.renderTableRow()}
      </tr>
    )
  }
}
export default Item;
