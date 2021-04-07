import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Section from './components/Section/';
import ContactsList from './components/ContactList/';
import Notification from './components/Notification/';

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
        {contacts.length > 0 ? (
          <Section title="Contacts">
            <ContactsList contacts={contacts} />
          </Section>
        ) : (
          <Notification message="Contacts are missing" />
        )}
      </div>
    );
  }
}

export default App;
