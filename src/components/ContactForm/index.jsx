import { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', phone: '' };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onAdd(this.state.name, this.state.phone);
  };

  render() {
    // console.log('log', this.state.name, this.state.contacts);
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          padding: '30px',
          border: '3px solid black',
          margin: '10px',
          borderRadius: '6px',
        }}
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
          />
        </label>
        <label htmlFor="number">
          Phone number
          <input
            type="tel"
            id="number"
            placeholder="phone number"
            pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlePhoneChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
