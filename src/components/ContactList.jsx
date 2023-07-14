import { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            display: 'flex',
            padding: '30px',
            border: '3px solid black',
            margin: '10px',
            borderRadius: '6px',
            width: '100%',
          }}
        >
          {this.props.contactItems
            .filter(item =>
              item.name.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map(item => (
              <li key={item.id}>
                {item.name}: {item.phone}
                <button
                  type="button"
                  onClick={() => this.props.deleteItem(item.id)}
                >
                  Usuń
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
