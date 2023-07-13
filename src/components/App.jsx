import { nanoid } from 'nanoid';
// nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: newContact,
          id: nanoid(),
        },
      ],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onAdd={name => this.addContact(name)} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          contactItems={this.state.contacts}
          deleteItem={id => this.deleteContact(id)}
        />
      </div>
    );
  }
}

class ContactForm extends Component {
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onAdd(this.state.name);
  };

  render() {
    // console.log('log', this.state.name, this.state.contacts);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contactItems.map(item => (
            <li key={item.id}>
              {item.name}
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
