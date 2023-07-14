import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (newContact, newNumber) => {
    const exists = this.state.contacts.find(
      contact => contact.name === newContact
    );
    if (!exists) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name: newContact,
            id: nanoid(),
            phone: newNumber,
          },
        ],
      }));
    } else {
      alert(`${newContact} is already in your Phonebook`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
  };

  filterContacts = newFilter => {
    this.setState(() => ({
      filter: newFilter,
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
        <ContactForm onAdd={(name, phone) => this.addContact(name, phone)} />

        <h2>Contacts</h2>
        <Filter onFilter={filter => this.filterContacts(filter)} />
        <ContactList
          contactItems={this.state.contacts}
          filter={this.state.filter}
          deleteItem={id => this.deleteContact(id)}
        />
      </div>
    );
  }
}
