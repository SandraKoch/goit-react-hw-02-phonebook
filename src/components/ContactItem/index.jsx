import { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li key={item.id}>
        {item.name}: {item.phone}
        <button type="button" onClick={() => this.props.deleteItem(item.id)}>
          Usuń
        </button>
      </li>
    );
  }
}
