import { Component } from 'react';
import { ContactItem } from '../ContactItem';

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
              <ContactItem
                item={item}
                deleteItem={id => this.props.deleteItem(id)}
              />
            ))}
        </ul>
      </div>
    );
  }
}
