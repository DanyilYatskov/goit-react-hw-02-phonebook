import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Section from './components/Section/';
import ContactsList from './components/ContactList/';

class App extends Component {
  static defaultProps = {
    contacts: [],
  };
  state = {
    contacts: this.props.contacts,
  };
  addContact = ({ name }) => {
    const contact = {
      id: uuidv4(),
      name: name,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
